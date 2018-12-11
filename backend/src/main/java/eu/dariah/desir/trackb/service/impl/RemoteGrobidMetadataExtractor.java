package eu.dariah.desir.trackb.service.impl;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.ConnectException;
import java.net.HttpRetryException;
import java.net.HttpURLConnection;
import java.net.SocketTimeoutException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import javax.xml.xpath.XPathExpressionException;
import javax.xml.xpath.XPathFactory;

import org.apache.commons.io.IOUtils;
import org.apache.http.HttpEntity;
import org.apache.http.entity.mime.HttpMultipartMode;
import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.apache.http.entity.mime.content.InputStreamBody;
import org.apache.http.entity.mime.content.StringBody;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

import eu.dariah.desir.trackb.model.YetAnotherBibliographicItem;
import eu.dariah.desir.trackb.service.GrobidMetadataExtractor;
import eu.dariah.desir.trackb.service.GrobidModelConverter;

/**
 * TODO: add documentation to this class
 *
 * @author rja
 */
public class RemoteGrobidMetadataExtractor implements GrobidMetadataExtractor {

	private static final Logger LOG = LoggerFactory.getLogger(RemoteGrobidMetadataExtractor.class);

	final GrobidModelConverter converter;
	final String grobidUrl;

	/**
	 * @param grobidUrl - The URL to the GROBID API.
	 * @param converter
	 */
	public RemoteGrobidMetadataExtractor(final String grobidUrl, final GrobidModelConverter converter) {
		this.converter = converter;
		this.grobidUrl = grobidUrl;
	}

	/* (non-Javadoc)
	 * @see eu.dariah.desir.trackb.service.GrobidMetadataExtractor#extractItems(java.io.File)
	 */
	@Override
	public List<YetAnotherBibliographicItem> extractItems(File file) throws Exception {
		final FileInputStream is = new FileInputStream(file);
		final List<YetAnotherBibliographicItem> items = processFulltextDocument(is);
		is.close();
		return items;
	}

	/* (non-Javadoc)
	 * @see eu.dariah.desir.trackb.service.GrobidMetadataExtractor#extractItems(java.lang.String)
	 */
	@Override
	public List<YetAnotherBibliographicItem> extractItems(String text) {
		// TODO Auto-generated method stub
	        // TODO implement using the following API endpoint:  curl -X POST -d "citations=Doerfel, S., Jäschke, R., Stumme, G.: The Role of Cores in Recommender Benchmarking for Social Bookmarking Systems. Transactions on Intelligent Systems and Technology. 7, 40:1–40:33 2016." http://cloud.science-miner.com/grobid/api/processCitation
	        // see https://grobid.readthedocs.io/en/latest/Grobid-service/#apiprocesscitation
		return null;
	}


	public void ping() throws RuntimeException {
		URL url = null;
		HttpURLConnection conn = null;

		try {
			url = new URL(this.grobidUrl + "/isalive");
			conn = (HttpURLConnection) url.openConnection();
			conn.setDoOutput(true);
			conn.setRequestMethod("GET");
			if (conn.getResponseCode() != HttpURLConnection.HTTP_OK) {
				throw new RuntimeException("Error while connecting to GROBID service. HTTP error: " + conn.getResponseCode());
			}
		} catch (IOException e) {
			throw new RuntimeException("Error while connecting to GROBID service", e);
		}
	}

	public List<YetAnotherBibliographicItem> processFulltextDocument(final InputStream input) {
		List<YetAnotherBibliographicItem> items = null;
		InputStream in = null;

		try {
			final URL url = new URL(this.grobidUrl + "/processFulltextDocument");
			final HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setDoOutput(true);
			conn.setRequestMethod("POST");
			final InputStreamBody inputStreamBody = new InputStreamBody(input, "input");
			final HttpEntity entity = MultipartEntityBuilder.create().setMode(HttpMultipartMode.STRICT)
					.addPart("input", inputStreamBody)
					.addPart("teiCoordinates", new StringBody("persName"))
					.addPart("teiCoordinates", new StringBody("ref"))
					.addPart("teiCoordinates", new StringBody("biblStruct"))
					.addPart("consolidateHeader", new StringBody("1"))
					.addPart("consolidateCitations", new StringBody("1"))
					.build();
			conn.setRequestProperty("Content-Type", entity.getContentType().getValue());
			try (OutputStream out = conn.getOutputStream()) {
				entity.writeTo(out);
			}

			if (conn.getResponseCode() == HttpURLConnection.HTTP_UNAVAILABLE) {
				throw new HttpRetryException("Failed : HTTP error code : "
						+ conn.getResponseCode(), conn.getResponseCode());
			}

			if (conn.getResponseCode() != HttpURLConnection.HTTP_OK) {
				throw new RuntimeException("Failed : HTTP error code : "
						+ conn.getResponseCode() + " " + IOUtils.toString(conn.getErrorStream(), "UTF-8"));
			}

			in = conn.getInputStream();

			//items = new LinkedList<YetAnotherBibliographicItem>();
			items = processCitations(in);

			conn.disconnect();

		} catch (ConnectException | HttpRetryException e) {
			LOG.error(e.getMessage(), e.getCause());
			try {
				Thread.sleep(20000);
				processFulltextDocument(input);
			} catch (InterruptedException ex) {
			}
		} catch (SocketTimeoutException e) {
			throw new RuntimeException("Grobid processing timed out.", e);
		} catch (IOException e) {
			LOG.error(e.getMessage(), e.getCause());
		} finally {
			try {
			    if (in != null) {
                    in.close();
                }
			} catch (IOException e) {
				// ignore
			}
		}
		// parse

		return items;
	}

	/**
	 * Parses citations from the given TEI file.
	 *
	 * @param is
	 * @return
	 */
	public List<YetAnotherBibliographicItem> processCitations(InputStream is) {

		// parse file
		Document teiDoc = null;

		final DocumentBuilderFactory docFactory = DocumentBuilderFactory.newInstance();
		docFactory.setValidating(false);
		//docFactory.setNamespaceAware(true);
		try {
			teiDoc = docFactory.newDocumentBuilder().parse(is);
		} catch (SAXException | IOException | ParserConfigurationException e) {
			LOG.error("Could not parse TEI file", e);
		}

		// extract items
		final XPath xPath = XPathFactory.newInstance().newXPath();
		final List<YetAnotherBibliographicItem> items = new ArrayList<>();
		try {
			final NodeList references = (NodeList) xPath.compile("/TEI/text/back/div/listBibl/biblStruct").evaluate(teiDoc, XPathConstants.NODESET);
			for (int i = 0; i < references.getLength(); i++) {
				items.add(extractItem(xPath, references.item(i)));
			}
		} catch (XPathExpressionException e) {
			LOG.error("Could not extract citations from TEI", e);
		}

		return items;

	}

	/**
	 * Model conversion from Grobid TEI to (basically) BibTeX.
	 *
	 * FIXME: very incomplete, works well for journal articles.
	 * FIXME: add meaningful unit tests.
	 *
	 * @param xPath
	 * @param ref
	 * @return
	 * @throws XPathExpressionException
	 */
	private static YetAnotherBibliographicItem extractItem(final XPath xPath, final Node ref) throws XPathExpressionException {
		// extract item metadata
		final YetAnotherBibliographicItem item = new YetAnotherBibliographicItem();

		final String coordinates = ref.getAttributes().getNamedItem("coords").getTextContent();

		// the item
		item.setDoi(getNodeContent(xPath, ref, "analytic/idno[@type=\"doi\"]"));
		item.setTitle(getNodeContent(xPath, ref, "analytic/title[@type=\"main\"]"));

		// authors
		final NodeList authorNodes = ((NodeList) xPath.compile("analytic/author").evaluate(ref, XPathConstants.NODESET));
		if (authorNodes != null) {
			final StringBuilder authors = new StringBuilder(); // FIXME: use BibTexUtils to generate an author string
			boolean begin = true;
			for (int i = 0; i < authorNodes.getLength(); i++) {
				final Node persName = (Node) xPath.compile("persName").evaluate(authorNodes.item(i).getChildNodes(), XPathConstants.NODE);

				final String first = getNodeContent(xPath, persName, "forename");
				final String last = getNodeContent(xPath, persName, "surname");
				if (first != null || last != null) {
					if (!begin)
						authors.append(" and ");
					if (first != null)
						authors.append(first);
					if (last != null)
						authors.append(" " + last);
					begin = false;
				}
			}
			item.setAuthors(authors.toString());
		}

		// the collection where the item is contained
		item.setJournal(getNodeContent(xPath, ref, "monogr/title[@level=\"j\"]"));
		item.setVolume(getNodeContent(xPath, ref, "monogr/imprint/biblScope[@unit=\"volume\"]"));
		item.setNumber(getNodeContent(xPath, ref, "monogr/imprint/biblScope[@unit=\"issue\"]"));
		item.setPublisher(getNodeContent(xPath, ref, "monogr/imprint/publisher"));
		// year
		final Node yearNode = ((Node) xPath.compile("monogr/imprint/date[@type=\"published\"]").evaluate(ref, XPathConstants.NODE));
		if (yearNode != null) {
			item.setYear(yearNode.getAttributes().getNamedItem("when").getTextContent());
		}
		// pages
		final Node pagesNode = ((Node) xPath.compile("monogr/imprint/biblScope[@unit=\"page\"]").evaluate(ref, XPathConstants.NODE));
		if (pagesNode != null) {
			final Node from = pagesNode.getAttributes().getNamedItem("from");
			final Node to = pagesNode.getAttributes().getNamedItem("to");
			if (from != null && to != null) {
				item.setPages(from.getTextContent() + "--" + to.getTextContent());
			} else if (from != null) {
				item.setPages(from.getTextContent());
			} else if (to != null) {
				item.setPages(to.getTextContent());
			}

		}

		// entrytype
		if (item.getJournal() != null)
			item.setEntryType("article");
		else
			item.setEntryType("misc");

		return item;
	}

	/**
	 * Extract a string from the given path
	 *
	 * @param xPath
	 * @param ref
	 * @param path
	 * @return
	 * @throws XPathExpressionException
	 */
	private static String getNodeContent(final XPath xPath, final Node ref, final String path) throws XPathExpressionException {
		final Node doiNode = ((Node) xPath.compile(path).evaluate(ref, XPathConstants.NODE));
		if (doiNode != null) {
			return doiNode.getTextContent();
		}
		return null;
	}

}

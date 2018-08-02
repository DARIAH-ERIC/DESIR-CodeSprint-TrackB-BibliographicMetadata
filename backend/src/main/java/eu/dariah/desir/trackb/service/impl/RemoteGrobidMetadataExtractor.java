package eu.dariah.desir.trackb.service.impl;

import java.io.File;
import java.util.List;

import eu.dariah.desir.trackb.model.YetAnotherBibliographicItem;
import eu.dariah.desir.trackb.service.GrobidMetadataExtractor;
import eu.dariah.desir.trackb.service.GrobidModelConverter;
import org.springframework.stereotype.Component;

/**
 * TODO: add documentation to this class
 *
 * @author rja
 */
public class RemoteGrobidMetadataExtractor implements GrobidMetadataExtractor {

	final GrobidModelConverter converter;

	/**
	 *
	 */
	public RemoteGrobidMetadataExtractor(final String grobidUrl, final GrobidModelConverter converter) {
		// TODO Auto-generated constructor stub
		this.converter = converter;

	}

	/* (non-Javadoc)
	 * @see eu.dariah.desir.trackb.service.GrobidMetadataExtractor#extractItems(java.io.File)
	 */
	@Override
	public List<YetAnotherBibliographicItem> extractItems(File file) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	/* (non-Javadoc)
	 * @see eu.dariah.desir.trackb.service.GrobidMetadataExtractor#extractItems(java.lang.String)
	 */
	@Override
	public List<YetAnotherBibliographicItem> extractItems(String text) {
		// TODO Auto-generated method stub
		return null;
	}

}

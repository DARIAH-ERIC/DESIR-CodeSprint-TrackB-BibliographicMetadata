package eu.dariah.desir.trackb.service;

import java.util.List;
import java.util.StringTokenizer;

import org.grobid.core.data.BiblioItem;
import org.grobid.core.data.Person;

import eu.dariah.desir.trackb.model.YetAnotherBibliographicItem;

/**
 * TODO: add documentation to this class
 *
 * @author rja
 */
public class GrobidModelConverter {

	/**
	 * Model conversion from {@link BiblioItem} to {@link YetAnotherBibliographicItem}.
	 * 
	 * @param item
	 * @return
	 */
	public YetAnotherBibliographicItem convert(final BiblioItem item) {
		final YetAnotherBibliographicItem result = new YetAnotherBibliographicItem();

		// string fields
		result.setAddress(item.getAddress());
		result.setBooktitle(item.getBookTitle());
		//result.setChapter(item.getBo);
		result.setDoi(item.getDOI());
		result.setEdition(item.getEdition());
		result.setInstitution(item.getInstitution());
		result.setJournal(item.getJournal());
		result.setNumber(item.getNumber());
		result.setPages(item.getPageRange());
		result.setPublisher(item.getPublisher());
		//result.setSchool(item.get);
		//result.setOrganization(item.getOrg);
		result.setSeries(item.getSerie()); // FIXME: or getSerieTitle()?
		result.setVolume(item.getVolume());
		result.setDay(item.getDay());
		result.setMonth(item.getMonth());
		result.setYear(item.getYear());

		result.setEntryType(getEntryType(result));

		// more complex fields
		result.setAuthors(getAuthors(item));

		return result;
	}

	/**
	 * Extracts the authors as a (BibTeX-compatible) string. 
	 * 
	 * Taken from BiblioItem.toBibTeX().
	 * 
	 * @param item
	 * @return
	 */
	public String getAuthors(final BiblioItem item) {
		if (item.getCollaboration() != null) 
			return item.getCollaboration();

		final String authorsFromList = personListToString(item.getFullAuthors());
		if (present(authorsFromList))
			return authorsFromList;
		
		final String authors = item.getAuthors();
		if (authors != null) {
			final StringTokenizer st = new StringTokenizer(authors, ";");
			final StringBuilder s = new StringBuilder();
			if (st.countTokens() > 1) {
				boolean begin = true;
				while (st.hasMoreTokens()) {
					final String author = st.nextToken();
					if (author != null) {
						if (begin) {
							s.append(author.trim());
							begin = false;
						} else
							s.append(" and " + author.trim());
					}
				}
			} else {
				s.append(authors);
			}
			return s.toString();
		}
		return "";
	}
	
	public String getEditors(final BiblioItem item) {
		if (item.getCollaboration() != null) 
			return item.getCollaboration();

		
		final String editorsFromList = personListToString(item.getFullEditors());
		if (present(editorsFromList)) 
			return editorsFromList;
		
		final String editors = item.getEditors();
		if (editors != null) {
			final StringTokenizer st = new StringTokenizer(editors, ";");
			final StringBuilder s = new StringBuilder();
			if (st.countTokens() > 1) {
				boolean begin = true;
				while (st.hasMoreTokens()) {
					final String author = st.nextToken();
					if (author != null) {
						if (begin) {
							s.append(author.trim());
							begin = false;
						} else
							s.append(" and " + author.trim());
					}
				}
			} else {
				s.append(editors);
			}
			return s.toString();
		}
		return "";
	}

	/**
	 * 
	 * @param fullPersons
	 */
	private String personListToString(final List<Person> fullPersons) {
		final StringBuilder s = new StringBuilder();
		if (fullPersons != null) {
			if (fullPersons.size() > 0) {
				boolean begin = true;
				for (final Person person : fullPersons) {
					if (begin) {
						s.append(person.getLastName() + ", " + person.getFirstName());
						begin = false;
					} else
						s.append(" and " + person.getLastName() + ", " + person.getFirstName());
				}
			}
		}
		return s.toString();
	}

	/**
	 * Returns the appropriate entry type based on some heuristics.
	 * 
	 * Heuristics taken from GROBID's BiblioItem.toBibTeX().
	 * 
	 * @param item
	 * @return The entrytype of the item.
	 */
	public String getEntryType(final YetAnotherBibliographicItem item) {

		if (item.getJournal() != null) 
			return "journal";

		/*        } else if (book_type != null) {
            bibtex += "@techreport{" + id + ",\n";
		 */
		final String booktitle = item.getBooktitle();
		if (booktitle != null) {
			if ((booktitle.startsWith("proc")) || (booktitle.startsWith("Proc")) ||
					(booktitle.startsWith("In Proc")) || (booktitle.startsWith("In proc"))) {
				return "inproceedings";
			}
			return "article"; // Why?
		} 
		return "misc";
	}
	
	/**
	 * Small helper to merge null and empty checks.
	 * 
	 * @param s
	 * @return
	 */
	private static boolean present(final String s) {
		return s != null && s.length() > 0;
	}

}

package eu.dariah.desir.trackb.service;

import java.util.List;
import java.util.StringTokenizer;

import org.grobid.core.data.BiblioItem;
import org.grobid.core.data.Person;
import org.springframework.stereotype.Service;

import eu.dariah.desir.trackb.model.YetAnotherBibliographicItem;

/**
 * TODO: add documentation to this class
 *
 * @author rja
 */
@Service
public class GrobidModelConverter {

	/**
	 * Model conversion from {@link BiblioItem} to {@link YetAnotherBibliographicItem}.
	 * 
	 * Based on {@link BiblioItem}'s toBibTeX() method.
	 * 
	 * @param item
	 * @return The converted model
	 */
	public YetAnotherBibliographicItem convert(final BiblioItem item) {
		final YetAnotherBibliographicItem result = new YetAnotherBibliographicItem();

		// string fields
		result.setAddress(item.getLocation()); // FIXME: there's also getAddress() and getLocationPublisher() -> which one is correct?
		result.setBooktitle(item.getBookTitle());
		//result.setChapter(item.getBo);
		result.setDoi(item.getDOI());
		result.setEdition(item.getEdition());
		result.setInstitution(item.getInstitution());
		result.setJournal(item.getJournal());
		result.setNumber(item.getIssue()); // FIXME: there's also getNumber() -> which one is correct?
		result.setPages(item.getPageRange());
		result.setPublisher(item.getPublisher());
		result.setSeries(item.getSerie()); // FIXME: or getSerieTitle()?
		result.setTitle(item.getTitle());
		result.setVolume(item.getVolumeBlock()); // FIXME: there's also getVolume() -> which one is correct?
		result.setDay(item.getDay());
		result.setMonth(item.getMonth());
		result.setYear(item.getPublicationDate()); // FIXME: see BiblioItem.toTEI(int n, int indent, GrobidAnalysisConfig config) for a more sophisticated (better?!) method 

		result.setEntryType(getEntryType(result));

		// more complex fields
		result.setAuthors(getAuthors(item));
		result.setEditors(getEditors(item));

		return result;
	}

	/**
	 * Extracts the authors as a (BibTeX-compatible) string. 
	 * 
	 * Taken from BiblioItem.toBibTeX().
	 * 
	 * @param item
	 * @return The list of authors as a string
	 */
	public String getAuthors(final BiblioItem item) {
		if (item.getCollaboration() != null) 
			return item.getCollaboration();

		final String authorsFromList = personListToString(item.getFullAuthors());
		if (present(authorsFromList))
			return authorsFromList;

		return personStringToString(item.getAuthors());
	}

	/**
	 * Extracts the editors as a (BibTeX-compatible) string. 
	 * 
	 * Taken from BiblioItem.toBibTeX().
	 * 
	 * @param item
	 * @return The list of editors as a string
	 */
	public String getEditors(final BiblioItem item) {
		final String editorsFromList = personListToString(item.getFullEditors());
		if (present(editorsFromList)) 
			return editorsFromList;

		return personStringToString(item.getEditors());
	}


	/**
	 * Convert a string containing several person names separated by ";" into one separated by " and ".
	 *
	 * Taken from BiblioItem.toBibTeX().
	 * 
	 * @param persons
	 * @return The string representing the persons.
	 */
	public String personStringToString(final String persons) {
		final StringBuilder s = new StringBuilder();
		if (persons != null) {
			final StringTokenizer st = new StringTokenizer(persons, ";");
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
				s.append(persons);
			}
		}
		return s.toString();
	}

	/**
	 * Convert a list of persons into a string.
	 * 
	 * Taken from BiblioItem.toBibTeX().
	 * Persons are separated by " and ".
	 * 
	 * @param fullPersons
	 * @return The person string.
	 */
	public String personListToString(final List<Person> fullPersons) {
		final StringBuilder s = new StringBuilder();
		if (fullPersons != null) {
			if (fullPersons.size() > 0) {
				boolean begin = true;
				for (final Person person : fullPersons) {
					final String firstName = person.getFirstName();
					final String lastName = person.getLastName();
					if (firstName != null || lastName != null) {
						if (begin) {
							begin = false;
						} else {
							s.append(" and ");
						}
						if (firstName != null) 
							s.append(firstName);
						if (lastName != null) 
							s.append(" " + lastName);
					}
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

		if (present(item.getJournal())) 
			return "article";

		/*        } else if (book_type != null) {
            bibtex += "@techreport{" + id + ",\n";
		 */
		final String booktitle = item.getBooktitle();
		if (present(booktitle)) {
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

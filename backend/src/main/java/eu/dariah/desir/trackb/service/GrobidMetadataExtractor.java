package eu.dariah.desir.trackb.service;

import java.io.File;
import java.util.List;

import eu.dariah.desir.trackb.model.YetAnotherBibliographicItem;

/**
 * TODO: add documentation to this class
 *
 * @author rja
 */
public interface GrobidMetadataExtractor {

	/**
	 * Extracts bibliographic references from the given file.
	 * 
	 * @param file - a file (PDF) containing bibliographic references
	 * @return the list of bibliographic references
	 */
	public List<YetAnotherBibliographicItem> extractItems(final File file) throws Exception;

	/**
	 * Extract bibliographic items (separated by newline) from the string. 
	 * 
	 * We assume that individual bibliographic items are separated by newline.
	 * 
	 * @param text
	 * @return the extracted bibliographic items
	 */
	public List<YetAnotherBibliographicItem> extractItems(final String text);
}
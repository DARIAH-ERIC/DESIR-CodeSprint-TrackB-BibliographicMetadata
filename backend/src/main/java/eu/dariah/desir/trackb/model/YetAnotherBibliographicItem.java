package eu.dariah.desir.trackb.model;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonView;

import eu.dariah.desir.trackb.json.JsonViews;

/**
 * Data model for bibliographic items.
 *
 * @author rja
 */
public class YetAnotherBibliographicItem {

	// the type of the bibliographic item (from the list from BibTeX)
	@JsonView(JsonViews.Public.class)  private String entryType;

    @JsonView(JsonViews.Public.class)  private String address;
    @JsonView(JsonViews.Public.class)  private String booktitle;
    @JsonView(JsonViews.Public.class)  private String chapter;
    @JsonView(JsonViews.Public.class)  private String doi;
    @JsonView(JsonViews.Public.class)  private String edition;
    @JsonView(JsonViews.Public.class)  private String institution;
    @JsonView(JsonViews.Public.class)  private String journal;
    @JsonView(JsonViews.Public.class)  private String number;
    @JsonView(JsonViews.Public.class)  private String pages;
    @JsonView(JsonViews.Public.class)  private String publisher;
    @JsonView(JsonViews.Public.class)  private String series;
    @JsonView(JsonViews.Public.class)  private String title;
    @JsonView(JsonViews.Public.class)  private String volume;
    @JsonView(JsonViews.Public.class)  private String day;
    @JsonView(JsonViews.Public.class)  private String month;
    @JsonView(JsonViews.Public.class)  private String year;
    // complex data represented as a string for now
    @JsonView(JsonViews.Public.class)  private String authors;
    @JsonView(JsonViews.Public.class)  private String editors;
    // for now: include tags directly
    @JsonView(JsonViews.Public.class)  private Set<String> tags;
    @JsonView(JsonViews.Public.class)  private String idx;

/*
	private String entrytype;
	private List<PersonName> author;
	private String crossref;
	private List<PersonName> editor;
	private String howpublished;
	private String note;
	private String type;
	private int scraperId;
	private String url;
*/

    /**
	 * @return the address
	 */
	public String getAddress() {
		return this.address;
	}
	/**
	 * @param address the address to set
	 */
	public void setAddress(String address) {
		this.address = address;
	}
	/**
	 * @return the booktitle
	 */
	public String getBooktitle() {
		return this.booktitle;
	}
	/**
	 * @param booktitle the booktitle to set
	 */
	public void setBooktitle(String booktitle) {
		this.booktitle = booktitle;
	}
	/**
	 * @return the chapter
	 */
	public String getChapter() {
		return this.chapter;
	}
	/**
	 * @param chapter the chapter to set
	 */
	public void setChapter(String chapter) {
		this.chapter = chapter;
	}
	/**
	 * @return the doi
	 */
	public String getDoi() {
		return this.doi;
	}
	/**
	 * @param doi the doi to set
	 */
	public void setDoi(String doi) {
		this.doi = doi;
	}
	/**
	 * @return the edition
	 */
	public String getEdition() {
		return this.edition;
	}
	/**
	 * @param edition the edition to set
	 */
	public void setEdition(String edition) {
		this.edition = edition;
	}
	/**
	 * @return the institution
	 */
	public String getInstitution() {
		return this.institution;
	}
	/**
	 * @param institution the institution to set
	 */
	public void setInstitution(String institution) {
		this.institution = institution;
	}
	/**
	 * @return the journal
	 */
	public String getJournal() {
		return this.journal;
	}
	/**
	 * @param journal the journal to set
	 */
	public void setJournal(String journal) {
		this.journal = journal;
	}
	/**
	 * @return the number
	 */
	public String getNumber() {
		return this.number;
	}
	/**
	 * @param number the number to set
	 */
	public void setNumber(String number) {
		this.number = number;
	}
	/**
	 * @return the pages
	 */
	public String getPages() {
		return this.pages;
	}
	/**
	 * @param pages the pages to set
	 */
	public void setPages(String pages) {
		this.pages = pages;
	}
	/**
	 * @return the publisher
	 */
	public String getPublisher() {
		return this.publisher;
	}
	/**
	 * @param publisher the publisher to set
	 */
	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}
	/**
	 * @return the series
	 */
	public String getSeries() {
		return this.series;
	}
	/**
	 * @param series the series to set
	 */
	public void setSeries(String series) {
		this.series = series;
	}
	/**
	 * @return the volume
	 */
	public String getVolume() {
		return this.volume;
	}
	/**
	 * @param volume the volume to set
	 */
	public void setVolume(String volume) {
		this.volume = volume;
	}
	/**
	 * @return the day
	 */
	public String getDay() {
		return this.day;
	}
	/**
	 * @param day the day to set
	 */
	public void setDay(String day) {
		this.day = day;
	}
	/**
	 * @return the month
	 */
	public String getMonth() {
		return this.month;
	}
	/**
	 * @param month the month to set
	 */
	public void setMonth(String month) {
		this.month = month;
	}
	/**
	 * @return the year
	 */
	public String getYear() {
		return this.year;
	}
	/**
	 * @param year the year to set
	 */
	public void setYear(String year) {
		this.year = year;
	}
	/**
	 * @return the entryType
	 */
	public String getEntryType() {
		return this.entryType;
	}
	/**
	 * @param entryType the entryType to set
	 */
	public void setEntryType(String entryType) {
		this.entryType = entryType;
	}
	/**
	 * @return the authors
	 */
	public String getAuthors() {
		return this.authors;
	}
	/**
	 * @param authors the authors to set
	 */
	public void setAuthors(String authors) {
		this.authors = authors;
	}
	/**
	 * @return the editors
	 */
	public String getEditors() {
		return this.editors;
	}
	/**
	 * @param editors the editors to set
	 */
	public void setEditors(String editors) {
		this.editors = editors;
	}
	/**
	 * @return the title
	 */
	public String getTitle() {
		return this.title;
	}
	/**
	 * @param title the title to set
	 */
	public void setTitle(String title) {
		this.title = title;
	}
	/**
	 * @return the tags
	 */
	public Set<String> getTags() {
		return this.tags;
	}
	/**
	 * @param tags the tags to set
	 */
	public void setTags(Set<String> tags) {
		this.tags = tags;
	}

    public String getIdx() {
        return idx;
    }

    public void setIdx(String idx) {
        this.idx = idx;
    }

    /* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return title + ". " + authors + " (" + year + ")";
	}
}

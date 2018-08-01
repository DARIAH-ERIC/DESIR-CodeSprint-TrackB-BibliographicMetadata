package eu.dariah.desir.trackb.model;

import com.fasterxml.jackson.annotation.JsonView;
import eu.dariah.desir.trackb.json.JsonViews;

public class Person {
    @JsonView(JsonViews.Public.class)
    private String firstName;
    @JsonView(JsonViews.Public.class)
    private String lastName;

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @Override
    public String toString() {
        return "Person{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                '}';
    }
}
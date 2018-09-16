package service

type Person struct {
	ID        string `json:"id,omitempty"`
	Firstname string `json:"firstname,omitempty"`
	Lastname  string `json:"lastname,omitempty"`
}

func DummyData() []Person {

	var people []Person
	people = append(people, Person{ID: "1", Firstname: "John", Lastname: "Doe"})
	people = append(people, Person{ID: "2", Firstname: "Koko", Lastname: "Doe"})
	people = append(people, Person{ID: "3", Firstname: "Francis", Lastname: "Sunday"})

	return people
}

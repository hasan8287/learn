package model

import (
	"app/shared/database"
)

// Category struct table category
type Category struct {
	ID     int    `db:"category_id"`
	Name   string `db:"category_name"`
	Status string `db:"category_status"`
}

// CategoryUpdate update data category
func CategoryUpdate(data Category) error {
	var err error

	_, err = database.SQL.Exec("UPDATE category SET category_name=?, category_status=? WHERE category_id=? LIMIT 1",
		data.Name, data.Status, data.ID)

	return err
}

// CategoryDelete delete category by id
func CategoryDelete(id string) error {
	var err error
	_, err = database.SQL.Exec("DELETE FROM category WHERE category_id = ?", id)

	return err
}

// CreateCategory insert data
func CreateCategory(data Category) (Category, error) {

	res, err := database.SQL.Exec("INSERT INTO category (category_name, category_status) VALUES (?,?)", data.Name, data.Status)

	if err != nil {
		return data, err
	}

	lid, err := res.LastInsertId()
	id := int(lid)
	data.ID = id

	return data, err
}

// GetCategory select data category
func GetCategory() ([]Category, error) {
	var err error

	var result []Category

	err = database.SQL.Select(&result, "SELECT category_id, category_name, category_status FROM category")

	return result, err
}

// CategoryGetOne : get single data category
func CategoryGetOne(id int) (Category, error) {
	var err error

	result := Category{}

	err = database.SQL.Get(&result,
		"SELECT category_id, category_name, category_status FROM category WHERE category_id=?", id)

	return result, err
}

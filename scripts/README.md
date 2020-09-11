#How to use

```
python3 create_config.py input.csv output.json
```

#Notes

The CSV file must have the the following columns in the following order

* Question text
* Answers
* Difficulty
* Category name
* Source
* Image URL
* Audio URL

The file should have a total of 52 rows (1 title row, 51 question rows)
The first 25 question rows are used for regular jeopardy
The next 25 question rows are for double jeopardy
The last question row is used for final jeopardy
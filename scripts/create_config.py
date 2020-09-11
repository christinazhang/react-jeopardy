import sys
import csv
import json

csv_filename = sys.argv[1]
config_name = sys.argv[2]

def readQuestionsFromCSV(filename):
    #Read from CSV
    questions = []
    with open(csv_filename) as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        line_count = 0
        for row in csv_reader:
            if line_count == 0:
                print(f'Column names are {", ".join(row)}')
                line_count += 1
            else:
                questions.append(row)
                line_count += 1
        print(f'Processed {line_count} lines.')
    return questions

def getContestants():
    #Contestant data
    contestants = [
        { "name": "Contestant 1", "imgLink": "https://via.placeholder.com/150" },
        { "name": "Contestant 2", "imgLink": "https://via.placeholder.com/150" },
        { "name": "Contestant 3", "imgLink": "https://via.placeholder.com/150" },
        { "name": "Contestant 4", "imgLink": "https://via.placeholder.com/150" },
        { "name": "Contestant 5", "imgLink": "https://via.placeholder.com/150" },
        { "name": "Contestant 6", "imgLink": "https://via.placeholder.com/150" },
        { "name": "Contestant 7", "imgLink": "https://via.placeholder.com/150" },
        { "name": "Contestant 8", "imgLink": "https://via.placeholder.com/150" }
    ]
    return contestants

def getRoundData(questions):
    round_data = []
    for _ in range(0,5):
        category_data = {"title":""}
        category_data["clues"] = []
        category_questions = []
        for _ in range(0,5):
            category_questions.append(questions.pop(0)) 
        for question in category_questions:
            question_info = {"text": question[0]}
            if question[5] != '':
                question_info["image"] = {"src": question[5]}
            if question[6] != '':
                question_info["audio"] = {"type": "GOOGLE_DRIVE","src": question[6]}
            category_data["clues"].append(question_info)
            category_data["title"]= question[3]
    
        round_data.append(category_data)
    return round_data

questions = readQuestionsFromCSV(csv_filename)
contestants = getContestants()
round1_data = getRoundData(questions)
round2_data = getRoundData(questions)
#Final jeopardy data
final_question = questions.pop(0)

data = {}
data["contestants"] = contestants
data["jeopardy"] = round1_data
data["doubleJeopardy"] = round2_data
data["finalJeopardy"] = {"text": final_question[0], "category": final_question[3]}


with open(config_name, 'w') as outfile:
    json.dump(data, outfile, indent=4)
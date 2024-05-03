def skincare_quiz():
    questions = [
        "1. How would you describe your skin's texture?\n  a) Smooth and even\n  b) Rough or bumpy in certain areas\n  c) Oily or greasy\n  d) Tight or dry",
        "2. How does your skin typically react to new skincare products?\n  a) It adapts easily without any adverse reactions\n  b) It might get a few pimples initially but then adjusts\n  c) It tends to break out or become irritated\n  d) It becomes red, itchy, or inflamed easily",
        "3. What are your main skincare concerns?\n  a) Maintaining hydration and preventing fine lines\n  b) Controlling excess oil and preventing breakouts\n  c) Evening out skin tone and reducing hyperpigmentation\n  d) Soothing irritation and reducing redness",
        "4. How does your skin react to sun exposure?\n  a) It tans easily and rarely burns\n  b) It burns occasionally, then tans\n  c) It burns easily and rarely tans\n  d) It burns quickly and sometimes blisters",
        "5. How often do you experience breakouts?\n  a) Rarely or never\n  b) Occasionally, especially in certain areas\n  c) Frequently, with multiple active breakouts\n  d) Rarely, but the skin is often irritated or inflamed",
        "6. How does your skin feel throughout the day?\n  a) Balanced and comfortable\n  b) A bit oily in the T-zone by midday\n  c) Consistently shiny or greasy\n  d) Tight or dry, especially after cleansing",
        "7. How does your skin respond to changes in the weather?\n  a) It adjusts well to different climates\n  b) It tends to get oilier in humid weather\n  c) It becomes drier in colder weather\n  d) It's sensitive to extreme temperatures and becomes easily irritated",
        "8. How does your skin appear after cleansing?\n  a) Clean and refreshed without any tightness\n  b) Clean but slightly oily in certain areas\n  c) Clean but shiny or greasy all over\n  d) Clean but feeling tight or uncomfortable",
        "9. How would you describe your skin tone?\n  a) Fair or light with pink undertones\n  b) Light to medium with neutral or warm undertones\n  c) Medium to deep with warm or golden undertones\n  d) Deep with rich, dark undertones",
        "10. How does your skin feel when exposed to harsh or fragranced skincare products?\n   a) It remains calm and unaffected\n   b) It might experience a slight tingle, but nothing severe\n   c) It becomes irritated or red\n   d) It stings or burns immediately upon application",
    ]

    identifiers = [
        [
            "a) Likely normal or combination skin",
            "b) Possibly combination or oily skin",
            "c) Probable oily skin",
            "d) Probably dry or sensitive skin",
        ],
        [
            "a) Likely normal or combination skin",
            "b) Possibly combination or acne-prone skin",
            "c) Probable acne-prone or sensitive skin",
            "d) Probably sensitive or reactive skin",
        ],
        [
            "a) Likely normal or dry skin",
            "b) Possibly oily or combination skin",
            "c) Probable combination or sensitive skin",
            "d) Probably sensitive or reactive skin",
        ],
        [
            "a) Likely normal or combination skin",
            "b) Possibly combination or dry skin",
            "c) Probable sensitive or fair skin",
            "d) Probably very sensitive or fair skin",
        ],
        [
            "a) Likely normal or dry skin",
            "b) Possibly combination or acne-prone skin",
            "c) Probable oily or acne-prone skin",
            "d) Probably sensitive or reactive skin",
        ],
        [
            "a) Likely normal or combination skin",
            "b) Possibly combination or oily skin",
            "c) Probable oily skin",
            "d) Probably dry or sensitive skin",
        ],
        [
            "a) Likely normal or combination skin",
            "b) Possibly combination or oily skin",
            "c) Probable dry or sensitive skin",
            "d) Probably sensitive or reactive skin",
        ],
        [
            "a) Likely normal or combination skin",
            "b) Possibly combination or oily skin",
            "c) Probable oily skin",
            "d) Probably dry or sensitive skin",
        ],
        [
            "a) Likely sensitive or fair skin",
            "b) Possibly normal or combination skin",
            "c) Probable combination or oily skin",
            "d) Probably oily or combination skin",
        ],
        [
            "a) Likely normal or combination skin",
            "b) Possibly combination or sensitive skin",
            "c) Probable sensitive or reactive skin",
            "d) Probably very sensitive or reactive skin",
        ],
    ]

    answers = []

    for i, question in enumerate(questions):
        print(question)
        while True:
            user_input = input("Choose an option (a/b/c/d): ").strip().lower()
            if user_input in ["a", "b", "c", "d"]:
                answers.append(identifiers[i][ord(user_input) - ord("a")])
                break
            else:
                print("Invalid option! Please choose a valid option (a/b/c/d).")

    return answers


# Run the skincare quiz
identifiers = skincare_quiz()
print("\nIdentifiers based on your responses:")
for identifier in identifiers:
    print("-", identifier)

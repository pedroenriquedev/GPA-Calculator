const button = document.querySelector(".group__header-remove");
const groupList = document.querySelector(".groupList");
const addSemesterButton = document.querySelector(".addSemester");
const semiDonut = document.querySelector(".semi-donut");

class Course {
  constructor(grade, credit) {
    this.grade = grade;
    this.credit = credit;
  }
}

let DOMstrings = {
  itemValue: ".item__value",
  itemName: ".item__name",
  itemSelect: ".item__select",
  group: ".group",
};

function init() {
  let inputs = getInputs();
  newSemester(addSemesterButton, inputs);
  setInputEventListener();
}

function updateGraph(gpa) {
  let percentage = (gpa * 100) / 4;
  semiDonut.style.setProperty("--percentage", `${percentage}`);
}

function getInputs() {
  const inputs = {
    allInputValue: Array.from(document.querySelectorAll(DOMstrings.itemValue)),
    allInputName: Array.from(document.querySelectorAll(DOMstrings.itemName)),
    allSelect: Array.from(document.querySelectorAll(DOMstrings.itemSelect)),
    semesters: Array.from(document.querySelectorAll(DOMstrings.group)),
  };
  return inputs;
}

// rodar isso na funcao init() e rodar pra cada course criado
function setInputEventListener() {
  let inputs = getInputs();
  //Object.keys(inputs)
  inputs.allSelect.forEach((e) => {
    e.addEventListener("change", () => {
      calcGpa(inputs);
    });
  });

  Object.keys(inputs).forEach((value, i) => {
    calcGpa(inputs);
    if (i !== Object.keys(inputs).length - 1) {
      inputs[value].forEach((e) => {
        e.addEventListener("keyup", () => {
          calcGpa(inputs);
        });
      });
    }
  });
}

groupList.addEventListener("click", (e) => {
  let btn = e.target;
  let inputs = getInputs();
  if (btn.classList.contains("addCourseBtn")) {
    let course = `<li class="item" id="item-0">
        <input type="text" placeholder="Course name" class="item__name">
        <select name="" id="itemSelect-0" class="item__select">
        <option value="4.0">A+</option>
        <option value="4.0">A</option>
        <option value="3.7">A-</option>
        <option value="3.3">B+</option>
        <option value="3.0">B</option>
        <option value="2.7">B-</option>
        <option value="2.3">C+</option>
        <option value="2.0">C</option>
        <option value="1.7">C-</option>
        <option value="1.3">D+</option>
        <option value="1.0">D</option>
        <option value="0.7">D-</option>
        <option value="0.0">F</option>
        </select>
        <input type="text" class="item__value" placeholder="Credits">
        <button class="remove removeItem"><i class="fas fa-trash-alt"></i></button>
        </li>`;
    let el = btn.parentNode.querySelector(".group__items");

    el.insertAdjacentHTML("beforeend", course);
    setInputEventListener();
  }

  if (btn.classList.contains("removeItem")) {
    btn.parentNode.parentNode.removeChild(btn.parentNode);
    setInputEventListener();
  }

  if (btn.classList.contains("removeSemester")) {
    console.log(
      btn.parentNode.parentNode.parentNode.removeChild(
        btn.parentNode.parentNode
      )
    );
  }

  if (btn.classList.contains("addSemester")) {
    newSemester(btn, inputs);
  }
});

function newSemester(btn, inputs) {
  let id = inputs.semesters.length + 1;
  const el = `<div class="group">
        <div class="group__header">
            <h3 class="group__header-title">Semester ${id}</h3>
            <button class="group__header-remove remove removeSemester"><i class="fas fa-trash-alt"></i></button>
        </div>
        
        <ul class="group__items">
            
            <li class="item" id="item-0">
                <input type="text" placeholder="Course name" class="item__name">
                <select name="" id="itemSelect-0" class="item__select">
                    <option value="4.0">A+</option>
                    <option value="4.0">A</option>
                    <option value="3.7">A-</option>
                    <option value="3.3">B+</option>
                    <option value="3.0">B</option>
                    <option value="2.7">B-</option>
                    <option value="2.3">C+</option>
                    <option value="2.0">C</option>
                    <option value="1.7">C-</option>
                    <option value="1.3">D+</option>
                    <option value="1.0">D</option>
                    <option value="0.7">D-</option>
                    <option value="0.0">F</option>
                </select>
                <input type="text" class="item__value" placeholder="Credits">
                <button class="remove removeItem"><i class="fas fa-trash-alt"></i></button>
            </li>

            <li class="item" id="item-0">
                <input type="text" placeholder="Course name" class="item__name">
                <select name="" id="itemSelect-0" class="item__select">
                    <option value="4.0">A+</option>
                    <option value="4.0">A</option>
                    <option value="3.7">A-</option>
                    <option value="3.3">B+</option>
                    <option value="3.0">B</option>
                    <option value="2.7">B-</option>
                    <option value="2.3">C+</option>
                    <option value="2.0">C</option>
                    <option value="1.7">C-</option>
                    <option value="1.3">D+</option>
                    <option value="1.0">D</option>
                    <option value="0.7">D-</option>
                    <option value="0.0">F</option>
                </select>
                <input type="text" class="item__value" placeholder="Credits">
                <button class="remove removeItem"><i class="fas fa-trash-alt"></i></button>
            </li>

            <li class="item" id="item-0">
                <input type="text" placeholder="Course name" class="item__name">
                <select name="" id="itemSelect-0" class="item__select">
                    <option value="4.0">A+</option>
                    <option value="4.0">A</option>
                    <option value="3.7">A-</option>
                    <option value="3.3">B+</option>
                    <option value="3.0">B</option>
                    <option value="2.7">B-</option>
                    <option value="2.3">C+</option>
                    <option value="2.0">C</option>
                    <option value="1.7">C-</option>
                    <option value="1.3">D+</option>
                    <option value="1.0">D</option>
                    <option value="0.7">D-</option>
                    <option value="0.0">F</option>
                </select>
                <input type="text" class="item__value" placeholder="Credits">
                <button class="remove removeItem"><i class="fas fa-trash-alt"></i></button>
            </li>
            
            
        </ul>
        
        <div class="group__partial">
            <span>Semester ${id} GPA:</span>
            <div class="partial">0.00</div>
        </div>
        
        <button  class="btn addCourseBtn"><i class="fas fa-folder-plus"></i>Add course</button>
        
    </div>`;
  btn.insertAdjacentHTML("beforebegin", el);
}

function calcGpa(obj) {
  // get grade points for each course while sum them
  let totalGradePoints = 0.0;
  let totalCredits = 0;
  let gpa;
  obj.allInputValue.forEach((e, index) => {
    if (e.value) {
      let el = obj.allSelect[index];
      let mult = parseFloat(el.options[el.selectedIndex].value);
      totalGradePoints = totalGradePoints + parseFloat(e.value) * mult;
      totalCredits = totalCredits + parseInt(e.value);
    }
  });

  obj.semesters.forEach((e, index) => {
    let semesterInputValue = Array.from(
      e.querySelectorAll(DOMstrings.itemValue)
    );
    let semesterInputSelect = Array.from(
      e.querySelectorAll(DOMstrings.itemSelect)
    );
    let semesterGradePoints = 0;
    let semesterCredits = 0;
    let semesterGpa = 0;
    semesterInputValue.forEach((e, index) => {
      if (e.value) {
        let el = semesterInputSelect[index];
        let mult = parseFloat(el.options[el.selectedIndex].value);
        semesterGradePoints = semesterGradePoints + parseFloat(e.value) * mult;
        semesterCredits = semesterCredits + parseInt(e.value);
      }
    });
    semesterGpa = semesterGradePoints / semesterCredits;
    if (!isNaN(semesterGpa)) {
      e.querySelector(".partial").innerHTML = semesterGpa.toFixed(2);
    } else {
      e.querySelector(".partial").innerHTML = "0.00";
    }
  });
  gpa = totalGradePoints / totalCredits;
  if (!isNaN(gpa)) {
    document.querySelector(".totals__value").innerHTML = gpa.toFixed(2);
    updateGraph(gpa.toFixed(2));
  } else {
    document.querySelector(".totals__value").innerHTML = "0.00";
    updateGraph(0.0);
  }

  //total grade points / credits attempted
}
//console.log(allInputValue);

/*
button.addEventListener('mouseenter',() => {
    button.parentNode.classList.add('hover');
});

button.addEventListener('mouseout',() => {
    button.parentNode.classList.remove('hover');
});
*/

init();

// // app.component.ts
// import { Component } from '@angular/core';

// interface Student {
//   name: string;
//   rollNumber: string;
// }

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   students: Student[] = [
//     { name: 'John Doe', rollNumber: '101' },
//     { name: 'Jane Smith', rollNumber: '102' },
//     { name: 'Bob Johnson', rollNumber: '103' },
//   ];
//   newStudent: Student = { name: '', rollNumber: '' };
//   selectedStudent: Student = { name: '', rollNumber: '' };
//   showAddFormFlag: boolean = false;
//   showEditFormFlag: boolean = false;

//   showAddForm() {
//     this.showAddFormFlag = true;
//     this.showEditFormFlag = false;
//   }

//   addStudent() {
//     this.students.push(this.newStudent);
//     this.newStudent = { name: '', rollNumber: '' };
//     this.showAddFormFlag = false;
//   }

//   editStudent(student: Student) {
//     this.selectedStudent = { ...student };
//     this.showEditFormFlag = true;
//     this.showAddFormFlag = false;
//   }

//   updateStudent() {
//     const index = this.students.findIndex(
//       (s) => s.rollNumber === this.selectedStudent.rollNumber
//     );
//     if (index !== -1) {
//       this.students[index] = { ...this.selectedStudent };
//       this.selectedStudent = { name: '', rollNumber: '' };
//       this.showEditFormFlag = false;
//     }
//   }

//   deleteStudent(student: Student) {
//     const index = this.students.indexOf(student);
//     if (index !== -1) {
//       this.students.splice(index, 1);
//     }
//   }
// }

// app.component.ts
// import { Component, OnInit } from '@angular/core';

// interface Student {
//   name: string;
//   rollNumber: string;
// }

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent implements OnInit {
//   students: Student[] = [];
//   newStudent: Student = { name: '', rollNumber: '' };
//   selectedStudent: Student = { name: '', rollNumber: '' };
//   showAddFormFlag: boolean = false;
//   showEditFormFlag: boolean = false;

//   ngOnInit() {
//     // Retrieve student data from local storage when the component initializes
//     const storedStudents = localStorage.getItem('students');
//     if (storedStudents) {
//       this.students = JSON.parse(storedStudents);
//     }
//   }

//   showAddForm() {
//     this.showAddFormFlag = true;
//     this.showEditFormFlag = false;
//   }

//   addStudent() {
//     this.students.push(this.newStudent);
//     this.saveStudentsToLocalStorage();
//     this.newStudent = { name: '', rollNumber: '' };
//     this.showAddFormFlag = false;
//   }

//   editStudent(student: Student) {
//     this.selectedStudent = { ...student };
//     this.showEditFormFlag = true;
//     this.showAddFormFlag = false;
//   }

//   updateStudent() {
//     const index = this.students.findIndex(
//       (s) => s.rollNumber === this.selectedStudent.rollNumber
//     );
//     if (index !== -1) {
//       this.students[index] = { ...this.selectedStudent };
//       this.saveStudentsToLocalStorage();
//       this.selectedStudent = { name: '', rollNumber: '' };
//       this.showEditFormFlag = false;
//     }
//   }

//   deleteStudent(student: Student) {
//     const index = this.students.indexOf(student);
//     if (index !== -1) {
//       this.students.splice(index, 1);
//       this.saveStudentsToLocalStorage();
//     }
//   }

//   private saveStudentsToLocalStorage() {
//     localStorage.setItem('students', JSON.stringify(this.students));
//   }
// }

// app.component.ts
import { Component, OnInit } from '@angular/core';

interface Student {
  name: string;
  rollNumber: string;
  email: string;
  semester: number;
  division: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  students: Student[] = [];
  newStudent: Student = {
    name: '',
    rollNumber: '',
    email: '',
    semester: 1,
    division: '',
  };
  selectedStudent: Student = {
    name: '',
    rollNumber: '',
    email: '',
    semester: 1,
    division: '',
  };
  showAddFormFlag: boolean = false;
  showEditFormFlag: boolean = false;

  ngOnInit() {
    // Retrieve student data from local storage when the component initializes
    const storedStudents = localStorage.getItem('students');
    if (storedStudents) {
      this.students = JSON.parse(storedStudents);
    }
  }

  showAddForm() {
    this.showAddFormFlag = true;
    this.showEditFormFlag = false;
  }

  addStudent() {
    this.students.push(this.newStudent);
    this.saveStudentsToLocalStorage();
    this.newStudent = {
      name: '',
      rollNumber: '',
      email: '',
      semester: 1,
      division: '',
    };
    this.showAddFormFlag = false;
  }

  editStudent(student: Student) {
    this.selectedStudent = { ...student };
    this.showEditFormFlag = true;
    this.showAddFormFlag = false;
  }

  updateStudent() {
    const index = this.students.findIndex(
      (s) => s.rollNumber === this.selectedStudent.rollNumber
    );
    if (index !== -1) {
      this.students[index] = { ...this.selectedStudent };
      this.saveStudentsToLocalStorage();
      this.selectedStudent = {
        name: '',
        rollNumber: '',
        email: '',
        semester: 1,
        division: '',
      };
      this.showEditFormFlag = false;
    }
  }

  deleteStudent(student: Student) {
    const index = this.students.indexOf(student);
    if (index !== -1) {
      this.students.splice(index, 1);
      this.saveStudentsToLocalStorage();
    }
  }

  private saveStudentsToLocalStorage() {
    localStorage.setItem('students', JSON.stringify(this.students));
  }
}

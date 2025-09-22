/* Subject.ts
   A base Subject class with a teacher property and a setter.
*/
namespace Subjects {
  export class Subject {
    teacher?: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}

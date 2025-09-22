/* Cpp.ts
   Adds optional experience to Teacher via declaration merging,
   then defines the Cpp subject behaviour.
*/
namespace Subjects {
  // declaration merging - add experienceTeachingC to Teacher
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      if (!this.teacher || !this.teacher.experienceTeachingC || this.teacher.experienceTeachingC <= 0) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}

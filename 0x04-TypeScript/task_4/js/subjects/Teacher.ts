/* Teacher.ts
   Base Teacher interface in namespace Subjects.
   Additional properties will be added to the same interface
   in other files using declaration merging.
*/
namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
  }
}

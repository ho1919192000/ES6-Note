/*ES6: Understand the Differences Between import and require
In the past, the function require() would be used to import the functions and code in external files and modules. While handy, this presents a problem: some files and modules are rather large, and you may only need certain code from those external resources.*/

/*ES6 gives us a very handy tool known as import. With it, we can choose which parts of a module or file to load into a given file, saving time and memory.*/

/*Consider the following example. Imagine that math_array_functions has about 20 functions, but I only need one, countItems, in my current file. The old require() approach would force me to bring in all 20 functions. With this new import syntax, I can bring in just the desired function, like so:*/

import { countItems } from "math_array_functions"
//A description of the above code:

import { function } from "file_path_goes_here"
// We can also import variables the same way!
//There are a few ways to write an import statement, but the above is a very common use-case.

//Note
//The whitespace surrounding the function inside the curly braces is a best practice - it makes it easier to read the import statement.

//Note
//The lessons in this section handle non-browser features. import, and the statements we introduce in the rest of these lessons, won't work on a browser directly. However, we can use various tools to create code out of this to make it work in browser.

//Note
//In most cases, the file path requires a ./ before it; otherwise, node will look in the node_modules directory first trying to load it as a dependency.

"use strict";
import { capitalizeString } from "string_functions"
capitalizeString("hello!");

/*ES6: Use export to Reuse a Code Block*/
/*In the previous challenge, you learned about import and how it can be leveraged to import small amounts of code from large files. In order for this to work, though, we must utilize one of the statements that goes with import, known as export. When we want some code - a function, or a variable - to be usable in another file, we must export it in order to import it into another file. Like import, export is a non-browser feature.*/

//The following is what we refer to as a named export. With this, we can import any code we export into another file with the import syntax you learned in the last lesson. Here's an example:

const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export { capitalizeString } //How to export functions.
export const foo = "bar"; //How to export variables.
//Alternatively, if you would like to compact all your export statements into one line, you can take this approach:

const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const foo = "bar";
export { capitalizeString, foo }
//Either approach is perfectly acceptable.

/*ES6: Use * to Import Everything from a File*/
//Suppose you have a file that you wish to import all of its contents into the current file. This can be done with the import * syntax.

//Here's an example where the contents of a file named "math_functions" are imported into a file in the same directory:

import * as myMathModule from "math_functions";
myMathModule.add(2,3);
myMathModule.subtract(5,3);
//And breaking down that code:

import * as object_with_name_of_your_choice from "file_path_goes_here"
//object_with_name_of_your_choice.imported_function
//You may use any name following the import * as portion of the statement. In order to utilize this method, it requires an object that receives the imported values. From here, you will use the dot notation to call your imported values.


//The code below requires the contents of a file, "capitalize_strings", found in the same directory as it, imported. Add the appropriate import * statement to the top of the file, using the object provided.
"use strict";
import * as myModule from "capitalize_strings";
myModule.capitalize("hello!");

/*ES6: Create an Export Fallback with export default*/
//In the export lesson, you learned about the syntax referred to as a named export. This allowed you to make multiple functions and variables available for use in other files.

//There is another export syntax you need to know, known as export default. Usually you will use this syntax if only one value is being exported from a file. It is also used to create a fallback value for a file or module.

//Here is a quick example of export default:

export default function add(x,y) {
  return x + y;
}
//Note: Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use export default with var, let, or const


//The following function should be the fallback value for the module. Please add the necessary code to do so.
"use strict";
export default function subtract(x,y) {return x - y;}

/*ES6: Import a Default Export*/
//In the last challenge, you learned about export default and its uses. It is important to note that, to import a default export, you need to use a different import syntax.

//In the following example, we have a function, add, that is the default export of a file, "math_functions". Here is how to import it:

import add from "math_functions";
add(5,4); //Will return 9
//The syntax differs in one key place - the imported value, add, is not surrounded by curly braces, {}. Unlike exported values, the primary method of importing a default export is to simply write the value's name after import.

//In the following code, please import the default export, subtract, from the file "math_functions", found in the same directory as this file.
"use strict";
import subtract from "math_functions";
subtract(7,4);
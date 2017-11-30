# flashcard_generator

This application has 2 types of flashcard generator constructors.  

The BasicCard constructor creates a basic flashcard, which has 2 arguments, 'front' and 'back'.  The flashcard question is in the 'front' argument and the flashcard answer is in the 'back' argument.

The ClozeCard constructor creates a cloze flashcard, which also has 2 arguments.  (A Cloze type flashcard shows a full sentence with part removed on the front, and the missing part of the sentence on the back.)  The arguments are 'text' and 'cloze' where 'text' is the full text of the sentence and 'cloze' is the part of the sentence that is missing and needs to be provided on the "back" of the flashcard.

The main.js shows an example of using both types of constructors, and console logs those examples.  
To execute the example application, follow these steps:

1) download the code from https://github.com/janetcushing/flashcard_generator

2) In the terminal, go to the directory where you have downloaded the code.

3) On the command line, enter:
node main.js


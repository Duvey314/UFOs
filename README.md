# UFOs

### Overview
This project uses html and JavaScript to create an interactive website on UFO sightings. The webpage uses bootstrap and d3.js to create an interactive table of UFO sightings. The table has 5 text input filters to search for specific data. The table updates after the user presses the enter key when typing in the text box. There is also a button to clear the filters and return the original table data.

![Webpage](https://github.com/Duvey314/UFOs/blob/master/static/images/webpage.PNG)

### Issues
The biggest challenge of this project was learning how the event handler worked in JavaScript. Figuring out the correct event to look for in the on() function was a game of guess and check. It was interesting to see how changing from input to change made such a difference for the user. I also had difficulty passing the event from the handler to the function. After looking in the documentation for selectAll I found the (this) keyword to interact with specific elements.

### Further Analysis
The next step in this project would be to have better feedback for user inputs. As of now, the user can input anything into the fields and there is nothing to tell them whether that data point doesn't exist or they have an input error (spelling Texas vs TX). Feedback in the filter fields could suggest type mismatches and the table could let them know that there are no data points in that state/date/country. Regular expressions could also help with parsing the data for the time column to give more filter capabilities.

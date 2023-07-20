/*/ drafting section VVV**/
/**
 * 
 * for i in urls
 * urls.map(x=>{
 * 	ID: x
 * 	group: tag as integer
 * })
 * makeNode()
 */
function makeNode(ID, group) {
	// Define desired object
	var obj = {
	  ID:  string,
	  group: int
	};
	// Return it
	return obj;
  }
  

function makeEdge(source, target, value) {
	// Define desired object
	var obj = {
		source:  string,
		target: int,
		value: int
	};
	// Return it
	return obj;
  }
/**
 * data export format notes
 * 
 * Grab link off page, convert to object, push object to array
 * 
 * 
 * "Object in JSON format where (object ID: is article title), (Object group: is int tag/color code)"
 * Links are stored in array of objects where (Object source: is string (article name)), (Object target: is string(title of connectd article))
 */


/**
 * unprocessed Stack Overflow answer on how to save as JSON
 * link to console.save() github http://bgrins.github.io/devtools-snippets/#console-save
 */
(function(console){

    console.save = function(data, filename){
    
        if(!data) {
            console.error('Console.save: No data')
            return;
        }
    
        if(!filename) filename = 'console.json'
    
        if(typeof data === "object"){
            data = JSON.stringify(data, undefined, 4)
        }
    
        var blob = new Blob([data], {type: 'text/json'}),
            e    = document.createEvent('MouseEvents'),
            a    = document.createElement('a')
    
        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
     }
    })(console)
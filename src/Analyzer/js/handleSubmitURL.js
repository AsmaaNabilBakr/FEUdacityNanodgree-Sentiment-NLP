// import {isValidURL} from ''
const {isValidURL} = require ('./isValidURL')
async function handleSubmitURL(event) {
    event.preventDefault()
    const urlToAnalyze = document.getElementById('url').value;
    if(isValidURL(urlToAnalyze)){
        const sendDataToAPI = await fetch(`http://localhost:8082/analyzeURL/${urlToAnalyze}`);
        const DataAnalyzed = await sendDataToAPI.json();
        console.log('DataAnalyzed', DataAnalyzed)
        document.getElementById("agreement").innerHTML = `Agreement: ${DataAnalyzed.agreement}`;
        document.getElementById("subjectivity").innerHTML = `Subjectivity: ${DataAnalyzed.subjectivity}`;
        document.getElementById("confidence").innerHTML = `Confidence: ${DataAnalyzed.confidence}`;
        document.getElementById("irony").innerHTML = `Irony: ${DataAnalyzed.irony}`;
        document.getElementById("noData").innerHTML = ' '
    }else{
        document.getElementById("agreement").innerHTML = '';
        document.getElementById("subjectivity").innerHTML = '';
        document.getElementById("confidence").innerHTML = '';
        document.getElementById("irony").innerHTML = '';
        document.getElementById("noData").innerHTML = 'There is no Data yet'
        setTimeout(function(){ alert('You Need to submit a Valid URL'); }, 300);
 
    }
    console.log(urlToAnalyze)
}

// export {handleSubmitURL}
module.exports = {handleSubmitURL};
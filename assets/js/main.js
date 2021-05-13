function readTheCompleteStory(story) {
    let truncatedText = document.querySelector(`article[data-story="${story}"] .ellipsis-punctuation-mark`);
    let prolongedText = document.querySelector(`article[data-story="${story}"] .prolonged-text`); 
    let readMoreBtnText = document.querySelector(`article[data-story="${story}"] .read-more-btn`);

    if (truncatedText.style.display === "none") {
        truncatedText.style.display = "inline";
        readMoreBtnText.textContent = "Read more";
        prolongedText.style.display = "none";
    } else {
        truncatedText.style.display = "none";
        readMoreBtnText.textContent = "Read less"; 
        prolongedText.style.display = "inline";
    }
}

const terminationEvent = "onpagehide" in self ? "pagehide" : "unload"; addEventListener(terminationEvent, e => { }, { capture: !0 });
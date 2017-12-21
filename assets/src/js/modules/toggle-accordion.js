// import our function(s)
import { updateActiveContent } from './update-content';

// import our variable(s)
import { tabPanel } from './toggle-tabs';

// Define our variables ( DOM elements / selectors )
const accordionHead = [].slice.call(document.querySelectorAll(".accordion-heading"));
const accordionItems = [].slice.call(document.querySelectorAll(".tabs-panel-content"));

//Initially collapse accordion panels apart from the first 
function hideAccordionContent() {
    for ( let i = 1; i < tabPanel.length; i++ ) { 
        tabPanel[i].children[2].classList.add("accordion-content-hide");
    }
}

function toggleAccordion() {

    // add click handler to Accordion Headings
    for ( let i = 0; i < accordionHead.length; i++) {
        accordionHead[i].addEventListener('click', function(e) {

            const currentPanel= e.target.parentNode;
            
            for ( let i = 0; i < accordionItems.length; i++ ) {
                
                // check state of clicked panel, if not active add active class
                if ( currentPanel.className === 'tabs-panel') {
                    currentPanel.children[2].classList.remove("accordion-content-hide");
                    currentPanel.children[2].classList.add("accordion-content-visible");

                    // Remove all other instances of active
                    for ( let i = 0; i < tabPanel.length; i++) {
                        tabPanel[i].classList.remove("tab-panel-active");
                    }

                    currentPanel.classList.add("tab-panel-active");
                } 

                // After each header is clicked fire update
                updateActiveContent();
            }
        })
    }
}

hideAccordionContent();
toggleAccordion();

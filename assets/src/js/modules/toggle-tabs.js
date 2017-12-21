// import our function(s)
import { updateActiveContent } from './update-content';

// Define our variables ( DOM elements / selectors )
export const tabPanel = [].slice.call(document.querySelectorAll(".tabs-panel"));
const tabs = [].slice.call(document.querySelectorAll(".tabs-title"));


function toggleTabs() {

    // add click handler to all tab buttons
    for ( let i = 0; i < tabs.length; i++ ) {
        tabs[i].addEventListener('click', function(e) {

            if (tabs[i].classList.contains('active')) {
               
            } else {
                for (let i = 0; i < tabs.length; i++) {
                    tabs[i].classList.remove('active');
                }
                tabs[i].classList.add('active');
            }   

            // retrieve anchor attribute from current tab as string
            let anchorRef = e.target.getAttribute("href");
            // match string to page ID's
            let activeTabContent = document.querySelector(anchorRef);

            // check active state of panel 
            if (activeTabContent.classList.contains("tab-panel-active")) {
                return;
            } else {
                    
                for ( let i = 0; i < tabPanel.length; i++) {
                    tabPanel[i].classList.remove("tab-panel-active"); 
                }

                activeTabContent.classList.add("tab-panel-active");
            }

            // After each tab is clicked fire update
            updateActiveContent();
        })
    }
}

toggleTabs();

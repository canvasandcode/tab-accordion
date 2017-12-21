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
              // Do nothing if tab is already active

            } else {
              // remove active from all tabs
                for (let i = 0; i < tabs.length; i++) {
                    tabs[i].classList.remove('active');
                }
                // give the currently clicked on tab the active class
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
              // remove all instances of active panel
                for ( let i = 0; i < tabPanel.length; i++) {
                    tabPanel[i].classList.remove("tab-panel-active");
                }
                // give the related panel an active class
                activeTabContent.classList.add("tab-panel-active");
            }

            // After each tab is clicked fire update
            updateActiveContent();
        })
    }
}

toggleTabs();

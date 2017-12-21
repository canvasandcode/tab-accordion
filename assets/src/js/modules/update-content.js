// import our variable(s)
import { tabPanel } from './toggle-tabs';

 export function updateActiveContent() {
    for ( let i = 0; i < tabPanel.length; i++ ) {

        // hide accordion body panels by default if not currently active
        tabPanel[i].children[2].classList.remove("accordion-content-visible");
        tabPanel[i].children[2].classList.add("accordion-content-hide");

        // keep panel & accordion content in sync 
        if (tabPanel[i].classList.contains("tab-panel-active")) {
            tabPanel[i].children[2].classList.remove("accordion-content-hide");
            tabPanel[i].children[2].classList.add("accordion-content-visible");
        }
    }
} 
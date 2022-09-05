# Progress button v0.1

## Why is this component needed? 

For technical reasons some of the services on the PYI journey take longer than is ideal, so this button interaction is designed to ensure that the user is aware that the system has recorded their form submission. 

## How does it work? 

This component extends the behaviour of the original button component in the design system. For screen reader users, the code reads out 'Continue, button, main' then on click (mouse, return key or space bar) 'button updated to one moment' then after 6 seconds, 'button updated to still working'. 

## Design decisions

* The interaction is based on a prototype created by Matt Fielding
* The animation should be simple but infer action is taking place
* The button text changes after a reasonable interval to reassure the user the action is still being worked on 
* The focus colour is used for the active state of the button, as the user’s focus should remain on the button until the interaction is complete and the user has moved to the next page (this can be modified in the SASS file) 
* For technical reasons the user cannot stop the interaction and the button is not sent information from the system as it carries out the task requested. 

## Options available 

In the nunjucks macro the developer can change: 
* The initial button text 
* Text initially shown on click 
* A second version of the text once a certain number of seconds has passed
* The number of seconds between changing the first and second message on the button 
* Hidden text read out by screen readers before the button text, e.g. ‘Button updated to…’ 

## Testing results 

* The interaction does not work on IE11
* NVDA reads out the text twice
* The black MacOS VoiceOver focus ring doesn’t grow ‘around’ the full width of the clicked button 
* [Complete testing spreadsheet](https://docs.google.com/spreadsheets/d/1Y2279rNOzlXWDX_4oeLR2NU49ExD1KXaKkxsUwLxbOg/edit#gid=0)

## Installation

See the [main README quick start guide](https://github.com/alphagov/govuk-frontend#quick-start) for how to install this component.

## Guidance and Examples

Find out when to use the progress button component in your service in the [GOV.UK Design System](https://design-system.service.gov.uk/components/progress-button).

## Component options

Use options to customise the appearance, content and behaviour of a component when using a macro, for example, changing the text.

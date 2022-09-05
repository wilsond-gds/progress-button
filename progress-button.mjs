// Progress Button code

function ProgressButton ($module) {
  // set up the variables (classes, content) for the interaction, including bringing in button text from the data- attributes in the HTML.
  this.$module = $module
  this.activeButtonClass = 'govuk-button--progress-active'
  this.textInitialState = $module.dataset.clickedTextStateFirst
  this.textSecondState = $module.dataset.clickedTextStateSecond
  this.textWaitTime = $module.dataset.clickedTextStateChange * 1000 // time stated in seconds
  this.updateButtonClass = 'govuk-button__update'
  this.updateButtonText = $module.dataset.accessiblityUpdateText
}

ProgressButton.prototype.init = function () {
  // Check for module
  if (!this.$module) {
    return
  }
  // initialise the behaviour
  ProgressButton.prototype.initControls = function () {
    this.$module.addEventListener('click', (event) => {
      const targetButton = event.target
      targetButton.setAttribute('aria-live', 'polite')
      const targetSpan = event.target.querySelector('.govuk-button__visible-text')
      const targetReaderSpan = event.target.querySelector('.govuk-button__update')
      targetButton.classList.add(this.activeButtonClass)
      targetSpan.textContent = this.textInitialState
      targetReaderSpan.textContent = this.updateButtonText
      targetButton.disabled = true
      setTimeout(() => {
        targetSpan.textContent = this.textSecondState
      }, this.textWaitTime)
    })
  }
  // add the behaviour to the buttons
  this.initControls()
}

export default ProgressButton

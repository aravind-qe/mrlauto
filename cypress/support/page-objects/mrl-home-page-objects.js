export const getSportSelectionDropDown = () => {
    cy.get('.sports-select > .choices > .choices__inner').click();
};
export const getCompetitionSelectionDropDown = () => {
    cy.get('.competition-select > .choices > .choices__inner')
}
export const selectVideoDurationShort =() => {
    cy.get('.duration-select-content > :nth-child(1)').click()
}
export const selectVideoDurationMedium =() => {
    cy.get('.duration-select-content > :nth-child(2)')
}
export const selectVideoDurationLong =() =>{
    cy.get('.duration-select-content > :nth-child(3)')
}
export const verifySportSelectionDarts = () => {
    cy.get(':nth-child(1) > [data-sport="darts"] > :nth-child(1) > .card-video-container > .card-body > .title')
}
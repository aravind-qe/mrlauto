import { getSportSelectionDropDown } from "../support/page-objects/mrl-home-page-objects";
import { verifySportSelectionDarts } from "../support/page-objects/mrl-home-page-objects";
describe('Filter VOD section in the OnDemand page', () => {
    beforeEach(() => {
      cy.visit('https://matchroom.live/ondemand');
    });
  
    it('should display only "Darts" videos when filtered', () => {
      // Click on the filter dropdown
      getSportSelectionDropDown()
      // Select "Darts" from the filter options
      cy.contains('Darts').click();
  
      // Verify that only "Darts" videos are displayed
      verifySportSelectionDarts()
    });
  });
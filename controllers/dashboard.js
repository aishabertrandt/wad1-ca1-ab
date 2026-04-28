'use strict';

import logger from "../utils/logger.js";
import booklistStore from "../models/booklist-store.js";

const dashboard = {
  createView(request, response) {
    logger.info("Dashboard page loading!");
    
    const viewData = {
      title: "Aisha's App Dashboard",
      booklists: booklistStore.getAllBooklists()
    };
    
    logger.debug(viewData.booklists);
    
    response.render('dashboard', viewData);
  },
};

export default dashboard;

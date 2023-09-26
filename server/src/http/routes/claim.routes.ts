import { Application } from "express";
import CommonRoutes from "./common.routes";
import createClaimAction from "../actions/create.claim.action";


class ClaimRoutes extends CommonRoutes {
    constructor(app: Application) {
        super(app, 'Claim')
    }

    setUpRoutes():Application {
        this.app.post('/claim', createClaimAction.run);
        return this.app;
    }

}

export default ClaimRoutes;
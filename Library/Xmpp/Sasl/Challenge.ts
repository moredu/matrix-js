﻿/*
 * Copyright (C) Alexander Gnauck, AG-Software
 * Web: http://www.ag-software.de
 * Email: alex@ag-software.net * 
 */
/// <reference path="../Base/Sasl.ts" />
module Matrix.Xmpp.Sasl {
    "use strict";

    export class Challenge extends Base.Sasl {
        constructor() {
            super("challenge");
        }
    }
}      
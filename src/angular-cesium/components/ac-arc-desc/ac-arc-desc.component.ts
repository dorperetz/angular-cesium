import { Component, forwardRef } from '@angular/core';
import { LayerService } from '../../services/layer-service/layer-service.service';
import { CesiumProperties } from '../../services/cesium-properties/cesium-properties.service';
import { ComputationCache } from '../../services/computation-cache/computation-cache.service';
import { ArcDrawerService } from '../../services/drawers/arc-drawer/arc-drawer.service';
import { BasicDesc } from '../../services/basic-desc/basic-desc.service';

/**
 *  This is an implementation of an arc.
 *  The element must be a child of ac-layer element.
 *  An arc is not cesium natively implemented and therefore it's API doesn't appear anywhere
 *
 *  __Usage :__
 *  ```
 *    <ac-arc-desc props="{
 *          center: arc.center,
 *          angle: arc.angle,
 *          delta: arc.delta,
 *          radius: arc.radius
 *    }">
 *    </ac-arc-desc>
 *    ```
 */

@Component({
	selector: 'ac-arc-desc',
	template: '',
  providers: [{ provide: BasicDesc, useExisting: forwardRef(() => AcArcDescComponent) }],
})
export class AcArcDescComponent extends BasicDesc {

	constructor(arcDrawer: ArcDrawerService, layerService: LayerService,
	            computationCache: ComputationCache, cesiumProperties: CesiumProperties) {
		super(arcDrawer, layerService, computationCache, cesiumProperties);
	}

}

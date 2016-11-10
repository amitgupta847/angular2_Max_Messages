/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './signup.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from './auth.service';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '@angular/forms/src/directives/reactive_directives/form_group_directive';
import * as import12 from '@angular/forms/src/directives/ng_control_status';
import * as import13 from '@angular/forms/src/directives/default_value_accessor';
import * as import14 from '@angular/forms/src/directives/reactive_directives/form_control_name';
import * as import15 from '@angular/core/src/linker/element_ref';
import * as import16 from '@angular/forms/src/directives/control_value_accessor';
import * as import17 from '@angular/forms/src/directives/ng_control';
import * as import18 from '@angular/forms/src/directives/control_container';
var renderType_SignupComponent_Host = null;
var _View_SignupComponent_Host0 = (function (_super) {
    __extends(_View_SignupComponent_Host0, _super);
    function _View_SignupComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_SignupComponent_Host0, renderType_SignupComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_SignupComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('app-signup', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_SignupComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._SignupComponent_0_4 = new import3.SignupComponent(this.parentInjector.get(import8.AuthService));
        this._appEl_0.initComponent(this._SignupComponent_0_4, [], compView_0);
        compView_0.create(this._SignupComponent_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_SignupComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.SignupComponent) && (0 === requestNodeIndex))) {
            return this._SignupComponent_0_4;
        }
        return notFoundResult;
    };
    _View_SignupComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._SignupComponent_0_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_SignupComponent_Host0;
}(import1.AppView));
function viewFactory_SignupComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_SignupComponent_Host === null)) {
        (renderType_SignupComponent_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_SignupComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var SignupComponentNgFactory = new import10.ComponentFactory('app-signup', viewFactory_SignupComponent_Host0, import3.SignupComponent);
var styles_SignupComponent = [];
var renderType_SignupComponent = null;
var _View_SignupComponent0 = (function (_super) {
    __extends(_View_SignupComponent0, _super);
    function _View_SignupComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_SignupComponent0, renderType_SignupComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_SignupComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'col-md-8 col-md-offset-2');
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'form', null);
        this._FormGroupDirective_2_3 = new import11.FormGroupDirective(null, null);
        this._ControlContainer_2_4 = this._FormGroupDirective_2_3;
        this._NgControlStatusGroup_2_5 = new import12.NgControlStatusGroup(this._ControlContainer_2_4);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'div', null);
        this.renderer.setElementAttribute(this._el_4, 'class', 'form-group');
        this._text_5 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_6 = this.renderer.createElement(this._el_4, 'label', null);
        this.renderer.setElementAttribute(this._el_6, 'for', 'firstName');
        this._text_7 = this.renderer.createText(this._el_6, 'First Name', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_9 = this.renderer.createElement(this._el_4, 'input', null);
        this.renderer.setElementAttribute(this._el_9, 'class', 'form-control');
        this.renderer.setElementAttribute(this._el_9, 'formControlName', 'firstName');
        this.renderer.setElementAttribute(this._el_9, 'id', 'firstName');
        this.renderer.setElementAttribute(this._el_9, 'type', 'text');
        this._DefaultValueAccessor_9_3 = new import13.DefaultValueAccessor(this.renderer, new import15.ElementRef(this._el_9));
        this._NG_VALUE_ACCESSOR_9_4 = [this._DefaultValueAccessor_9_3];
        this._FormControlName_9_5 = new import14.FormControlName(this._ControlContainer_2_4, null, null, this._NG_VALUE_ACCESSOR_9_4);
        this._NgControl_9_6 = this._FormControlName_9_5;
        this._NgControlStatus_9_7 = new import12.NgControlStatus(this._NgControl_9_6);
        this._text_10 = this.renderer.createText(this._el_4, '\n        ', null);
        this._text_11 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_12 = this.renderer.createElement(this._el_2, 'div', null);
        this.renderer.setElementAttribute(this._el_12, 'class', 'form-group');
        this._text_13 = this.renderer.createText(this._el_12, '\n            ', null);
        this._el_14 = this.renderer.createElement(this._el_12, 'label', null);
        this.renderer.setElementAttribute(this._el_14, 'for', 'lastName');
        this._text_15 = this.renderer.createText(this._el_14, 'Last Name', null);
        this._text_16 = this.renderer.createText(this._el_12, '\n            ', null);
        this._el_17 = this.renderer.createElement(this._el_12, 'input', null);
        this.renderer.setElementAttribute(this._el_17, 'class', 'form-control');
        this.renderer.setElementAttribute(this._el_17, 'formControlName', 'lastName');
        this.renderer.setElementAttribute(this._el_17, 'id', 'lastName');
        this.renderer.setElementAttribute(this._el_17, 'type', 'text');
        this._DefaultValueAccessor_17_3 = new import13.DefaultValueAccessor(this.renderer, new import15.ElementRef(this._el_17));
        this._NG_VALUE_ACCESSOR_17_4 = [this._DefaultValueAccessor_17_3];
        this._FormControlName_17_5 = new import14.FormControlName(this._ControlContainer_2_4, null, null, this._NG_VALUE_ACCESSOR_17_4);
        this._NgControl_17_6 = this._FormControlName_17_5;
        this._NgControlStatus_17_7 = new import12.NgControlStatus(this._NgControl_17_6);
        this._text_18 = this.renderer.createText(this._el_12, '\n        ', null);
        this._text_19 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_20 = this.renderer.createElement(this._el_2, 'div', null);
        this.renderer.setElementAttribute(this._el_20, 'class', 'form-group');
        this._text_21 = this.renderer.createText(this._el_20, '\n            ', null);
        this._el_22 = this.renderer.createElement(this._el_20, 'label', null);
        this.renderer.setElementAttribute(this._el_22, 'for', 'email');
        this._text_23 = this.renderer.createText(this._el_22, 'Mail', null);
        this._text_24 = this.renderer.createText(this._el_20, '\n            ', null);
        this._el_25 = this.renderer.createElement(this._el_20, 'input', null);
        this.renderer.setElementAttribute(this._el_25, 'class', 'form-control');
        this.renderer.setElementAttribute(this._el_25, 'formControlName', 'email');
        this.renderer.setElementAttribute(this._el_25, 'id', 'email');
        this.renderer.setElementAttribute(this._el_25, 'type', 'email');
        this._DefaultValueAccessor_25_3 = new import13.DefaultValueAccessor(this.renderer, new import15.ElementRef(this._el_25));
        this._NG_VALUE_ACCESSOR_25_4 = [this._DefaultValueAccessor_25_3];
        this._FormControlName_25_5 = new import14.FormControlName(this._ControlContainer_2_4, null, null, this._NG_VALUE_ACCESSOR_25_4);
        this._NgControl_25_6 = this._FormControlName_25_5;
        this._NgControlStatus_25_7 = new import12.NgControlStatus(this._NgControl_25_6);
        this._text_26 = this.renderer.createText(this._el_20, '\n        ', null);
        this._text_27 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_28 = this.renderer.createElement(this._el_2, 'div', null);
        this.renderer.setElementAttribute(this._el_28, 'class', 'form-group');
        this._text_29 = this.renderer.createText(this._el_28, '\n            ', null);
        this._el_30 = this.renderer.createElement(this._el_28, 'label', null);
        this.renderer.setElementAttribute(this._el_30, 'for', 'password');
        this._text_31 = this.renderer.createText(this._el_30, 'Password', null);
        this._text_32 = this.renderer.createText(this._el_28, '\n            ', null);
        this._el_33 = this.renderer.createElement(this._el_28, 'input', null);
        this.renderer.setElementAttribute(this._el_33, 'class', 'form-control');
        this.renderer.setElementAttribute(this._el_33, 'formControlName', 'password');
        this.renderer.setElementAttribute(this._el_33, 'id', 'password');
        this.renderer.setElementAttribute(this._el_33, 'type', 'password');
        this._DefaultValueAccessor_33_3 = new import13.DefaultValueAccessor(this.renderer, new import15.ElementRef(this._el_33));
        this._NG_VALUE_ACCESSOR_33_4 = [this._DefaultValueAccessor_33_3];
        this._FormControlName_33_5 = new import14.FormControlName(this._ControlContainer_2_4, null, null, this._NG_VALUE_ACCESSOR_33_4);
        this._NgControl_33_6 = this._FormControlName_33_5;
        this._NgControlStatus_33_7 = new import12.NgControlStatus(this._NgControl_33_6);
        this._text_34 = this.renderer.createText(this._el_28, '\n        ', null);
        this._text_35 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_36 = this.renderer.createElement(this._el_2, 'button', null);
        this.renderer.setElementAttribute(this._el_36, 'class', 'btn btn-primary');
        this.renderer.setElementAttribute(this._el_36, 'type', 'submit');
        this._text_37 = this.renderer.createText(this._el_36, 'Submit', null);
        this._text_38 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_39 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = this.renderer.listen(this._el_2, 'ngSubmit', this.eventHandler(this._handle_ngSubmit_2_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_2, 'submit', this.eventHandler(this._handle_submit_2_1.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_2, 'reset', this.eventHandler(this._handle_reset_2_2.bind(this)));
        this._expr_3 = import7.UNINITIALIZED;
        var subscription_0 = this._FormGroupDirective_2_3.ngSubmit.subscribe(this.eventHandler(this._handle_ngSubmit_2_0.bind(this)));
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        var disposable_3 = this.renderer.listen(this._el_9, 'input', this.eventHandler(this._handle_input_9_0.bind(this)));
        var disposable_4 = this.renderer.listen(this._el_9, 'blur', this.eventHandler(this._handle_blur_9_1.bind(this)));
        this._expr_12 = import7.UNINITIALIZED;
        this._expr_13 = import7.UNINITIALIZED;
        this._expr_14 = import7.UNINITIALIZED;
        this._expr_15 = import7.UNINITIALIZED;
        this._expr_16 = import7.UNINITIALIZED;
        this._expr_17 = import7.UNINITIALIZED;
        this._expr_18 = import7.UNINITIALIZED;
        var disposable_5 = this.renderer.listen(this._el_17, 'input', this.eventHandler(this._handle_input_17_0.bind(this)));
        var disposable_6 = this.renderer.listen(this._el_17, 'blur', this.eventHandler(this._handle_blur_17_1.bind(this)));
        this._expr_21 = import7.UNINITIALIZED;
        this._expr_22 = import7.UNINITIALIZED;
        this._expr_23 = import7.UNINITIALIZED;
        this._expr_24 = import7.UNINITIALIZED;
        this._expr_25 = import7.UNINITIALIZED;
        this._expr_26 = import7.UNINITIALIZED;
        this._expr_27 = import7.UNINITIALIZED;
        var disposable_7 = this.renderer.listen(this._el_25, 'input', this.eventHandler(this._handle_input_25_0.bind(this)));
        var disposable_8 = this.renderer.listen(this._el_25, 'blur', this.eventHandler(this._handle_blur_25_1.bind(this)));
        this._expr_30 = import7.UNINITIALIZED;
        this._expr_31 = import7.UNINITIALIZED;
        this._expr_32 = import7.UNINITIALIZED;
        this._expr_33 = import7.UNINITIALIZED;
        this._expr_34 = import7.UNINITIALIZED;
        this._expr_35 = import7.UNINITIALIZED;
        this._expr_36 = import7.UNINITIALIZED;
        var disposable_9 = this.renderer.listen(this._el_33, 'input', this.eventHandler(this._handle_input_33_0.bind(this)));
        var disposable_10 = this.renderer.listen(this._el_33, 'blur', this.eventHandler(this._handle_blur_33_1.bind(this)));
        this._expr_39 = import7.UNINITIALIZED;
        this._expr_40 = import7.UNINITIALIZED;
        this._expr_41 = import7.UNINITIALIZED;
        this._expr_42 = import7.UNINITIALIZED;
        this._expr_43 = import7.UNINITIALIZED;
        this._expr_44 = import7.UNINITIALIZED;
        this._expr_45 = import7.UNINITIALIZED;
        this._expr_46 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._text_35,
            this._el_36,
            this._text_37,
            this._text_38,
            this._text_39
        ], [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4,
            disposable_5,
            disposable_6,
            disposable_7,
            disposable_8,
            disposable_9,
            disposable_10
        ], [subscription_0]);
        return null;
    };
    _View_SignupComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.DefaultValueAccessor) && (9 === requestNodeIndex))) {
            return this._DefaultValueAccessor_9_3;
        }
        if (((token === import16.NG_VALUE_ACCESSOR) && (9 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_9_4;
        }
        if (((token === import14.FormControlName) && (9 === requestNodeIndex))) {
            return this._FormControlName_9_5;
        }
        if (((token === import17.NgControl) && (9 === requestNodeIndex))) {
            return this._NgControl_9_6;
        }
        if (((token === import12.NgControlStatus) && (9 === requestNodeIndex))) {
            return this._NgControlStatus_9_7;
        }
        if (((token === import13.DefaultValueAccessor) && (17 === requestNodeIndex))) {
            return this._DefaultValueAccessor_17_3;
        }
        if (((token === import16.NG_VALUE_ACCESSOR) && (17 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_17_4;
        }
        if (((token === import14.FormControlName) && (17 === requestNodeIndex))) {
            return this._FormControlName_17_5;
        }
        if (((token === import17.NgControl) && (17 === requestNodeIndex))) {
            return this._NgControl_17_6;
        }
        if (((token === import12.NgControlStatus) && (17 === requestNodeIndex))) {
            return this._NgControlStatus_17_7;
        }
        if (((token === import13.DefaultValueAccessor) && (25 === requestNodeIndex))) {
            return this._DefaultValueAccessor_25_3;
        }
        if (((token === import16.NG_VALUE_ACCESSOR) && (25 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_25_4;
        }
        if (((token === import14.FormControlName) && (25 === requestNodeIndex))) {
            return this._FormControlName_25_5;
        }
        if (((token === import17.NgControl) && (25 === requestNodeIndex))) {
            return this._NgControl_25_6;
        }
        if (((token === import12.NgControlStatus) && (25 === requestNodeIndex))) {
            return this._NgControlStatus_25_7;
        }
        if (((token === import13.DefaultValueAccessor) && (33 === requestNodeIndex))) {
            return this._DefaultValueAccessor_33_3;
        }
        if (((token === import16.NG_VALUE_ACCESSOR) && (33 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_33_4;
        }
        if (((token === import14.FormControlName) && (33 === requestNodeIndex))) {
            return this._FormControlName_33_5;
        }
        if (((token === import17.NgControl) && (33 === requestNodeIndex))) {
            return this._NgControl_33_6;
        }
        if (((token === import12.NgControlStatus) && (33 === requestNodeIndex))) {
            return this._NgControlStatus_33_7;
        }
        if (((token === import11.FormGroupDirective) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 38)))) {
            return this._FormGroupDirective_2_3;
        }
        if (((token === import18.ControlContainer) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 38)))) {
            return this._ControlContainer_2_4;
        }
        if (((token === import12.NgControlStatusGroup) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 38)))) {
            return this._NgControlStatusGroup_2_5;
        }
        return notFoundResult;
    };
    _View_SignupComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var changes = null;
        changes = null;
        var currVal_3 = this.context.myForm;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._FormGroupDirective_2_3.form = currVal_3;
            if ((changes === null)) {
                (changes = {});
            }
            changes['form'] = new import7.SimpleChange(this._expr_3, currVal_3);
            this._expr_3 = currVal_3;
        }
        if ((changes !== null)) {
            this._FormGroupDirective_2_3.ngOnChanges(changes);
        }
        changes = null;
        var currVal_12 = 'firstName';
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this._FormControlName_9_5.name = currVal_12;
            if ((changes === null)) {
                (changes = {});
            }
            changes['name'] = new import7.SimpleChange(this._expr_12, currVal_12);
            this._expr_12 = currVal_12;
        }
        if ((changes !== null)) {
            this._FormControlName_9_5.ngOnChanges(changes);
        }
        changes = null;
        var currVal_21 = 'lastName';
        if (import4.checkBinding(throwOnChange, this._expr_21, currVal_21)) {
            this._FormControlName_17_5.name = currVal_21;
            if ((changes === null)) {
                (changes = {});
            }
            changes['name'] = new import7.SimpleChange(this._expr_21, currVal_21);
            this._expr_21 = currVal_21;
        }
        if ((changes !== null)) {
            this._FormControlName_17_5.ngOnChanges(changes);
        }
        changes = null;
        var currVal_30 = 'email';
        if (import4.checkBinding(throwOnChange, this._expr_30, currVal_30)) {
            this._FormControlName_25_5.name = currVal_30;
            if ((changes === null)) {
                (changes = {});
            }
            changes['name'] = new import7.SimpleChange(this._expr_30, currVal_30);
            this._expr_30 = currVal_30;
        }
        if ((changes !== null)) {
            this._FormControlName_25_5.ngOnChanges(changes);
        }
        changes = null;
        var currVal_39 = 'password';
        if (import4.checkBinding(throwOnChange, this._expr_39, currVal_39)) {
            this._FormControlName_33_5.name = currVal_39;
            if ((changes === null)) {
                (changes = {});
            }
            changes['name'] = new import7.SimpleChange(this._expr_39, currVal_39);
            this._expr_39 = currVal_39;
        }
        if ((changes !== null)) {
            this._FormControlName_33_5.ngOnChanges(changes);
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_4 = this._NgControlStatusGroup_2_5.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementClass(this._el_2, 'ng-untouched', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = this._NgControlStatusGroup_2_5.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementClass(this._el_2, 'ng-touched', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = this._NgControlStatusGroup_2_5.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_2, 'ng-pristine', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this._NgControlStatusGroup_2_5.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_2, 'ng-dirty', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_8 = this._NgControlStatusGroup_2_5.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_2, 'ng-valid', currVal_8);
            this._expr_8 = currVal_8;
        }
        var currVal_9 = this._NgControlStatusGroup_2_5.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_2, 'ng-invalid', currVal_9);
            this._expr_9 = currVal_9;
        }
        var currVal_13 = this._NgControlStatus_9_7.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setElementClass(this._el_9, 'ng-untouched', currVal_13);
            this._expr_13 = currVal_13;
        }
        var currVal_14 = this._NgControlStatus_9_7.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setElementClass(this._el_9, 'ng-touched', currVal_14);
            this._expr_14 = currVal_14;
        }
        var currVal_15 = this._NgControlStatus_9_7.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this.renderer.setElementClass(this._el_9, 'ng-pristine', currVal_15);
            this._expr_15 = currVal_15;
        }
        var currVal_16 = this._NgControlStatus_9_7.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this.renderer.setElementClass(this._el_9, 'ng-dirty', currVal_16);
            this._expr_16 = currVal_16;
        }
        var currVal_17 = this._NgControlStatus_9_7.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this.renderer.setElementClass(this._el_9, 'ng-valid', currVal_17);
            this._expr_17 = currVal_17;
        }
        var currVal_18 = this._NgControlStatus_9_7.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this.renderer.setElementClass(this._el_9, 'ng-invalid', currVal_18);
            this._expr_18 = currVal_18;
        }
        var currVal_22 = this._NgControlStatus_17_7.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_22, currVal_22)) {
            this.renderer.setElementClass(this._el_17, 'ng-untouched', currVal_22);
            this._expr_22 = currVal_22;
        }
        var currVal_23 = this._NgControlStatus_17_7.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_23, currVal_23)) {
            this.renderer.setElementClass(this._el_17, 'ng-touched', currVal_23);
            this._expr_23 = currVal_23;
        }
        var currVal_24 = this._NgControlStatus_17_7.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_24, currVal_24)) {
            this.renderer.setElementClass(this._el_17, 'ng-pristine', currVal_24);
            this._expr_24 = currVal_24;
        }
        var currVal_25 = this._NgControlStatus_17_7.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_25, currVal_25)) {
            this.renderer.setElementClass(this._el_17, 'ng-dirty', currVal_25);
            this._expr_25 = currVal_25;
        }
        var currVal_26 = this._NgControlStatus_17_7.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_26, currVal_26)) {
            this.renderer.setElementClass(this._el_17, 'ng-valid', currVal_26);
            this._expr_26 = currVal_26;
        }
        var currVal_27 = this._NgControlStatus_17_7.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_27, currVal_27)) {
            this.renderer.setElementClass(this._el_17, 'ng-invalid', currVal_27);
            this._expr_27 = currVal_27;
        }
        var currVal_31 = this._NgControlStatus_25_7.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_31, currVal_31)) {
            this.renderer.setElementClass(this._el_25, 'ng-untouched', currVal_31);
            this._expr_31 = currVal_31;
        }
        var currVal_32 = this._NgControlStatus_25_7.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_32, currVal_32)) {
            this.renderer.setElementClass(this._el_25, 'ng-touched', currVal_32);
            this._expr_32 = currVal_32;
        }
        var currVal_33 = this._NgControlStatus_25_7.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_33, currVal_33)) {
            this.renderer.setElementClass(this._el_25, 'ng-pristine', currVal_33);
            this._expr_33 = currVal_33;
        }
        var currVal_34 = this._NgControlStatus_25_7.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_34, currVal_34)) {
            this.renderer.setElementClass(this._el_25, 'ng-dirty', currVal_34);
            this._expr_34 = currVal_34;
        }
        var currVal_35 = this._NgControlStatus_25_7.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_35, currVal_35)) {
            this.renderer.setElementClass(this._el_25, 'ng-valid', currVal_35);
            this._expr_35 = currVal_35;
        }
        var currVal_36 = this._NgControlStatus_25_7.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_36, currVal_36)) {
            this.renderer.setElementClass(this._el_25, 'ng-invalid', currVal_36);
            this._expr_36 = currVal_36;
        }
        var currVal_40 = this._NgControlStatus_33_7.ngClassUntouched;
        if (import4.checkBinding(throwOnChange, this._expr_40, currVal_40)) {
            this.renderer.setElementClass(this._el_33, 'ng-untouched', currVal_40);
            this._expr_40 = currVal_40;
        }
        var currVal_41 = this._NgControlStatus_33_7.ngClassTouched;
        if (import4.checkBinding(throwOnChange, this._expr_41, currVal_41)) {
            this.renderer.setElementClass(this._el_33, 'ng-touched', currVal_41);
            this._expr_41 = currVal_41;
        }
        var currVal_42 = this._NgControlStatus_33_7.ngClassPristine;
        if (import4.checkBinding(throwOnChange, this._expr_42, currVal_42)) {
            this.renderer.setElementClass(this._el_33, 'ng-pristine', currVal_42);
            this._expr_42 = currVal_42;
        }
        var currVal_43 = this._NgControlStatus_33_7.ngClassDirty;
        if (import4.checkBinding(throwOnChange, this._expr_43, currVal_43)) {
            this.renderer.setElementClass(this._el_33, 'ng-dirty', currVal_43);
            this._expr_43 = currVal_43;
        }
        var currVal_44 = this._NgControlStatus_33_7.ngClassValid;
        if (import4.checkBinding(throwOnChange, this._expr_44, currVal_44)) {
            this.renderer.setElementClass(this._el_33, 'ng-valid', currVal_44);
            this._expr_44 = currVal_44;
        }
        var currVal_45 = this._NgControlStatus_33_7.ngClassInvalid;
        if (import4.checkBinding(throwOnChange, this._expr_45, currVal_45)) {
            this.renderer.setElementClass(this._el_33, 'ng-invalid', currVal_45);
            this._expr_45 = currVal_45;
        }
        var currVal_46 = !this.context.myForm.valid;
        if (import4.checkBinding(throwOnChange, this._expr_46, currVal_46)) {
            this.renderer.setElementProperty(this._el_36, 'disabled', currVal_46);
            this._expr_46 = currVal_46;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_SignupComponent0.prototype.destroyInternal = function () {
        this._FormControlName_9_5.ngOnDestroy();
        this._FormControlName_17_5.ngOnDestroy();
        this._FormControlName_25_5.ngOnDestroy();
        this._FormControlName_33_5.ngOnDestroy();
    };
    _View_SignupComponent0.prototype._handle_ngSubmit_2_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.onSubmit() !== false);
        return (true && pd_0);
    };
    _View_SignupComponent0.prototype._handle_submit_2_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._FormGroupDirective_2_3.onSubmit() !== false);
        return (true && pd_0);
    };
    _View_SignupComponent0.prototype._handle_reset_2_2 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._FormGroupDirective_2_3.onReset() !== false);
        return (true && pd_0);
    };
    _View_SignupComponent0.prototype._handle_input_9_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._DefaultValueAccessor_9_3.onChange($event.target.value) !== false);
        return (true && pd_0);
    };
    _View_SignupComponent0.prototype._handle_blur_9_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._DefaultValueAccessor_9_3.onTouched() !== false);
        return (true && pd_0);
    };
    _View_SignupComponent0.prototype._handle_input_17_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._DefaultValueAccessor_17_3.onChange($event.target.value) !== false);
        return (true && pd_0);
    };
    _View_SignupComponent0.prototype._handle_blur_17_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._DefaultValueAccessor_17_3.onTouched() !== false);
        return (true && pd_0);
    };
    _View_SignupComponent0.prototype._handle_input_25_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._DefaultValueAccessor_25_3.onChange($event.target.value) !== false);
        return (true && pd_0);
    };
    _View_SignupComponent0.prototype._handle_blur_25_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._DefaultValueAccessor_25_3.onTouched() !== false);
        return (true && pd_0);
    };
    _View_SignupComponent0.prototype._handle_input_33_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._DefaultValueAccessor_33_3.onChange($event.target.value) !== false);
        return (true && pd_0);
    };
    _View_SignupComponent0.prototype._handle_blur_33_1 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._DefaultValueAccessor_33_3.onTouched() !== false);
        return (true && pd_0);
    };
    return _View_SignupComponent0;
}(import1.AppView));
export function viewFactory_SignupComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_SignupComponent === null)) {
        (renderType_SignupComponent = viewUtils.createRenderComponentType('C:/Users/guptam00/Desktop/Udemy/node max course 1 nov 2016/01 Seed/assets/app/auth/signup.component.html', 0, import9.ViewEncapsulation.None, styles_SignupComponent, {}));
    }
    return new _View_SignupComponent0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=signup.component.ngfactory.js.map
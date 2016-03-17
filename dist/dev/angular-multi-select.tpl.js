'use strict';

var angular_multi_select = angular.module('angular-multi-select');

angular_multi_select.run(['$templateCache', function ($templateCache) {
	$templateCache.put('angular-multi-select.tpl', '\n\n\t\t<div class="ams-button" ng-click="open = !open">\n\t\t\t<div class="ams-button-text" ng-bind-html="amssh.create_dropdown_label(stats)"></div>\n\t\t\t<div class="ams-caret"></div>\n\t\t</div>\n\n\t\t<div class="ams-container ng-cloak" ng-show="open">\n\n\t\t\t<div class="ams-helpers">\n\t\t\t\t<div class="selects">\n\t\t\t\t\t<button class="all ams-btn" type="button" accesskey="a" ng-click="amse.check_all()" ng-hide="hide_helpers.indexOf(\'check_all\') > -1">{{ \'CHECK_ALL\' | translate }}</button>\n\t\t\t\t\t<button class="none ams-btn" type="button" accesskey="n" ng-click="amse.uncheck_all()" ng-hide="hide_helpers.indexOf(\'check_none\') > -1">{{ \'CHECK_NONE\' | translate }}</button>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="resets">\n\t\t\t\t\t<button class="reset ams-btn" type="button" accesskey="r" ng-click="reset()" ng-hide="hide_helpers.indexOf(\'reset\') > -1">{{ \'RESET\' | translate }}</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="ams-search" ng-show="search_field !== null">\n\t\t\t\t<input class="ams-search-field" type="text" name="ams-search-field" value="" placeholder="{{ \'SEARCH\' | translate }}" ng-model="search" autofocus>\n\t\t\t\t<div class="ams-spinner" ng-show="search_spinner_visible"></div>\n\t\t\t\t<button class="clear ams-btn" type="button" accesskey="c" name="clear" title="{{ \'CLEAR\' | translate }}" ng-click="search = \'\'"></button>\n\t\t\t</div>\n\n\t\t\t<div class="ams-items">\n\t\t\t\t<div\n\t\t\t\t\tng-repeat="item in items track by item[ops.ID_PROPERTY]"\n\t\t\t\t\tclass="ams-item {{ amssh.get_level_class(item) }} {{ amssh.get_type_class(item) }} {{ amssh.get_open_class(item) }} {{ $index === focused_index ? \'ams-item-focused\' : \'\' }}"\n\t\t\t\t>\n\t\t\t\t\t<!-- Caret -->\n\t\t\t\t\t<div\n\t\t\t\t\t\tclass="ams-caret {{ amssh.get_open_class(item) }}"\n\t\t\t\t\t\tng-click="amse.toggle_open_node(item)"\n\t\t\t\t\t></div>\n\n\t\t\t\t\t<!-- Text of the element -->\n\t\t\t\t\t<div class="ams-item-text" ng-bind-html="amssh.create_label(item)"></div>\n\n\t\t\t\t\t<!-- Check holder -->\n\t\t\t\t\t<div\n\t\t\t\t\t\tclass="check {{ amssh.get_checked_class(item) }}"\n\t\t\t\t\t\tng-click="amse.toggle_check_node(item)"\n\t\t\t\t\t>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\n\t');
}]);

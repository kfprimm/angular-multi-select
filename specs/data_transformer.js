describe('Testing data converter service', function() {
	beforeEach(
		module('angular-multi-select-data-converter')
	);

	var scope, angularMultiSelectDataConverter;

	beforeEach(function () {
		angular.mock.inject(function ($injector) {
			angularMultiSelectDataConverter = $injector.get('angularMultiSelectDataConverter');
		});
	});

	describe('Testing check_prerequisites method', function () {
		it('Should fail with wrong input data', function () {
			var res = angularMultiSelectDataConverter.check_prerequisites(wrong_data);
			expect(res).toEqual(false);

			var res2 = angularMultiSelectDataConverter.check_prerequisites(wrong_data_2);
			expect(res2).toEqual(false);
		});

		it('Should be able to fill in empty/missing values and remove wrong ones', inject(function () {
			var res = angularMultiSelectDataConverter.check_prerequisites(short_data);
			expect(res).toEqual(short_data_after_check_prerequisites);

			var res2 = angularMultiSelectDataConverter.check_prerequisites(short_data_2);
			expect(res2).toEqual(short_data_after_check_prerequisites_2);

			var res3 = angularMultiSelectDataConverter.check_prerequisites(short_data_3);
			expect(res3).toEqual(short_data_after_check_prerequisites_3);

			var res4 = angularMultiSelectDataConverter.check_prerequisites(short_data_4);
			expect(res4).toEqual(short_data_after_check_prerequisites_4);

			var res5 = angularMultiSelectDataConverter.check_prerequisites(short_data_5);
			expect(res5).toEqual(short_data_after_check_prerequisites_5);
		}));
	});

	describe('Testing to_internal method', function () {
		it('Should be able to convert full input data to internal data structure', inject(function () {
			var res = angularMultiSelectDataConverter.check_prerequisites(full_data);
			var internal_data = angularMultiSelectDataConverter.to_internal(res);

			expect(internal_data).toEqual(final_data);
		}));
	});

});

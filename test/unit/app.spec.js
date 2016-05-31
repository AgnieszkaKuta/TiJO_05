describe('app', function () {
    'use strict';

    var app = window.app;

    describe('generateMessage', function () {
        it('should return true because it is palindrom ', function () {
            expect(app.generateMessage("Ala")).toEqual({vowel: 2, palindrome: true});
        });

        it('should return false because no plalindrom ', function () {
            expect(app.generateMessage("pieseł")).toEqual({vowel: 3, palindrome: false});
        });

        it('should return 0 vowel ', function () {
            expect(app.generateMessage("pdf")).toEqual({vowel: 0, palindrome: false});

            it('should return 4 vowel ', function () {
                expect(app.generateMessage("agaaa")).toEqual({vowel: 4, palindrome: false});
            });
        });

        it('should get a real number', function() {
            expect(app.generateMessage('aaaa7')).toEqual({vowel: 4, palindrome: true});
        });
        it('should get a real number', function() {
            expect(app.generateMessage('ababababa')).toEqual({vowel: 5, palindrome: true});
        });

    });

    describe('isPalindrome', function () {

        describe('toHaveBeenCalled', function () {
            beforeAll(function (){
                spyOn(app, 'isPalindrome');
                app.isPalindrome('Ala');
            });
            it('should call isPalindrome function', function() {
                expect(app.isPalindrome).toHaveBeenCalled();
                expect(app.isPalindrome).toHaveBeenCalledWith('Ala');
            });

        });

        describe('and.callThrough', function () {
            beforeAll(function (){
                spyOn(app, 'isPalindrome').and.callThrough();
                app.generateMessage('Ala');
            });
            it('should call isPalindrome function' + 'when call generateMessage function ', function() {
                expect(app.isPalindrome).toHaveBeenCalled();
                expect(app.isPalindrome).toHaveBeenCalledWith('Ala');
            });
        });

        describe('and.returnValue', function () {
            var temp;
            beforeAll(function (){
                spyOn(app, 'isPalindrome').and.returnValue(true);
            });
            it('should call isPalindrome function and return true', function() {
                temp = app.isPalindrome('Ala');
                expect(wynik).toBe(true);
            });
            it('should call generateMessage and isPalindrome functions and return true', function() {
                temp = app.generateMessage('Ala');
                expect(temp).toEqual({vowel: 2, palindrome: true});
            });
        });
        describe('and.returnValue', function () {
            var temp;
            beforeAll(function (){
                spyOn(app, 'isPalindrome').and.returnValue(false);
            });
            it('should call isPalindrome function and return false', function() {
                temp = app.isPalindrome('pieseł');
                expect(wynik).toBe(false);
            });
            it('should call generateMessage and isPalindrome functions and return false', function() {
                temp = app.generateMessage('Ala');
                expect(temp).toEqual({vowel: 4, palindrome: false});
            });
        });

        describe('and.callFake', function () {

        });

        describe('calls.count()', function () {

        });
    });

    describe('vowelCount', function () {

        describe('toHaveBeenCalled', function () {
            beforeAll(function (){
                spyOn(app, 'vowelCount');
                app.vowelCount('Ala');
            });
            it('should call vowelCount function', function() {
                expect(app.vowelCount).toHaveBeenCalled();
                expect(app.vowelCount).toHaveBeenCalledWith('Ala');
            });
        });

        describe('and.callThrough', function () {
            eforeAll(function (){
                spyOn(app, 'vowelCount').and.callThrough();
                app.generateMessage('Ala');
            });
            it('should call vowelCount function' + 'when call generateMessage function ', function() {
                expect(app.vowelCount).toHaveBeenCalled();
                expect(app.vowelCount).toHaveBeenCalledWith('Ala');
            });
        });

        describe('and.returnValue', function () {
            var temp;
            beforeAll(function (){
                spyOn(app, 'vowelCount').and.returnValue(2);
            });
            it('should call vowelCount function and return true', function() {
                temp = app.vowelCount('Ala');
                expect(temp).toBe(2);
            });
            it('should call generateMessage and vowelCount functions and return 2', function() {
                temp = app.generateMessage('Ala');
                expect(temp).toEqual({vowel: 2, palindrome: true});
            });
        });
        describe('and.returnValue', function () {
            var temp;
            beforeAll(function (){
                spyOn(app, 'vowelCount').and.returnValue(4);
            });
            it('should call vowelCount function and return false', function() {
                temp = app.vowelCount('pieseł');
                expect(temp).toBe(3);
            });
            it('should call generateMessage and vowelCount functions and return 4', function() {
                temp = app.generateMessage('pieseł');
                expect(temp).toEqual({vowel: 3, palindrome: false});
            });
        });

        describe('and.callFake', function () {

        });

        describe('calls.count()', function () {

        });
    });
});

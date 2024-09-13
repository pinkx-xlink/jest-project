# jest-project
A jest project for the Testing Basics lesson of The Odin Project

notes:

 // or you can match an exact error message using a regexp like below
    // test fails
    // expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/);
    // test passes
    expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/);
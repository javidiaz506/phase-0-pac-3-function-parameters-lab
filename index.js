function introduction (name)
{
return "Hi, my name is" +name+  ".";
}

describe('introduction(name)', function() {
  it('takes in an argument of a name and returns a phrase with that name using string interpolation', function() {
    expect(introduction("Aki")).toEqual("Hi, my name is ${name}.");
    expect(introduction("Samip")).toEqual("Hi, my name is ${name}.");
  })
})


function introductionWithLanguage (name,language)
{
return "Hi, my name is " +name+ " and I am learning to program in " +language+ ".";
}

describe('introductionWithLanguage(name, language)', function() {
  it('takes in two arguments, a name and a language, and returns a phrase using those arguments', function() {
    expect(introductionWithLanguage("Aki", "Ember.js")).toEqual("Hi, my name is Aki and I am learning to program in Ember.js.");
    expect(introductionWithLanguage("Samip", "React")).toEqual("Hi, my name is Samip and I am learning to program in React.");
  })
})
 
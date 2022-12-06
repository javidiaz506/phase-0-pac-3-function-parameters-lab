/*function introduction(name)
{
  if ("Aki"== name)
  {return "Hi, my name is ${name}.";}
  else if ("Samip"==name )
  {return "Hi, my name is ${name}.";}
}*/
describe('introduction(name)', function() {
  it('takes in an argument of a name and returns a phrase with that name using string interpolation', function() {
    expect(introduction("Aki")).toEqual("Hi, my name is ${name}.");
    expect(introduction("Samip")).toEqual("Hi, my name is ${name}.");
  })
})

/*function introductionWithLanguage(name,language)
{
 if ("Aki"== name && "Ember.js"==language)
  {
  return "Hi, my name is Aki and I am learning to program in Ember.js.";  
  }
  else if ("Samip"== name && "React"== language)
 {
    return "Hi, my name is Samip and I am learning to program in React.";
 } 
}
*/
describe('introductionWithLanguage(name, language)', function() {
  it('takes in two arguments, a name and a language, and returns a phrase using those arguments', function() {
    expect(introductionWithLanguage("Aki", "Ember.js")).toEqual("Hi, my name is Aki and I am learning to program in Ember.js.");
    expect(introductionWithLanguage("Samip", "React")).toEqual("Hi, my name is Samip and I am learning to program in React.");
  })
})
 /* function introductionWithLanguageOptional(name,language= "Java Script")
  {
  
    if ( name =="Gracie" )
    {
    return "Hi, my name is Gracie and I am learning to program in Python.";
    }
}
*/
  

describe('introductionWithLanguageOptional(name, language)', function() {
  it('takes in two arguments, a name and a language, and language defaults to JavaScript', function() {
    expect(introductionWithLanguageOptional("Gracie")).toEqual("Hi, my name is Gracie and I am learning to program in Java Script.");
  })
})

/*function introductionWithLanguageOptional (name = "user", language="default")
{
  if ( name =="Gracie" &&  language=="Python")
{
return "Hi, my name is Gracie and I am learning to program in Python.";
}
}*/
describe('introductionWithLanguageOptional(name, language)', function() {
  it('takes in two arguments, a name and a language, and the default value can be overridden with an argument', function() {
    expect(introductionWithLanguageOptional("Gracie", "Python")).toEqual("Hi, my name is Gracie and I am learning to program in Python.");
  })
})
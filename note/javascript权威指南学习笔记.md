javascript权威直男学习笔记
================================

###3.8.2显式类型转换
####page 50
这里有几个坑值得注意,当不通过new运算符调用这些函数时，它们会作为类型转换函数，并且按照3-2的图表进行转换。
-	String(false)		=> "false"
-	Boolean([])		=> true
-	Object(3)			=> new Number(3);	
-	除了undefined和null其他的类型都具有toString方法()
-	如果试图把undefined和null转换成Object则会报错TypeError ，但是Object函数在这里不会
-	Object(null)		=> Object{}
-	Object(undefined)	=> Object{}

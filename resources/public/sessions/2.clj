#session/session
{
 :id 1, :last-loop-id 4
 :subsessions [
               #session/subsession
               {:type :cljs :loops [#session/loop {:id "1", :output 2, :input "12345"}  #session/loop {:id "2", :output [:loop "2"], :input "2"}]}
               #session/subsession
               {:type :clj :loops [#session/loop {:id "3", :output 2, :input "(+ 1 2)"}  #session/loop {:id "4", :output [:loop "2"], :input "2"}]}
               ]

 }

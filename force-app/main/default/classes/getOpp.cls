public with sharing class getOpp {

    @AuraEnabled(Cacheable=true)
    public static list<Opportunity> getOppList(){

        list<Opportunity> oppList = [SELECT Id, Name, StageName, CloseDate, Type FROM Opportunity LIMIT 5];

        for(Opportunity op : oppList){
            if (Name == NewOpp) {

                
                
            }
        }

        return oppList;
    }
}

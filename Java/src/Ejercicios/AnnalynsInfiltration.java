package Ejercicios;

public class AnnalynsInfiltration {

    /**
     *
     * Booleans
     *
     * Booleans in Java are represented by the boolean type, which values can be either true or false.
     *
     * Java supports three boolean operators:
     *
     *     ! (NOT): negates the boolean
     *     && (AND): takes two booleans and returns true if they're both true
     *     || (OR): returns true if any of the two booleans is true
     *
     *     Examples:
     *     !true // => false
     *     !false // => true
     *     true && false // => false
     *     true && true // => true
     *     false || false // => false
     *     false || true // => true
     *
     * */

    /**
     *
     * Instructions
     *
     * In this exercise, you'll implement the quest logic for a new RPG game that a friend is developing.
     * The game's main character is Annalyn, a brave girl with a fierce and loyal pet dog.
     * Unfortunately, disaster strikes: her best friend was kidnapped while searching for berries in the forest.
     * Annalyn will try to find and rescue her friend, optionally taking her dog along on the quest.
     *
     * */


    /**
     *
     * Check if a fast attack can be made
     *
     * Implement the (static) AnnalynsInfiltration.canFastAttack() method,
     * which takes a boolean value indicating whether the knight is awake.
     * This method returns true if a fast attack can be made based on the state of the knight.
     * Otherwise, it returns false:
     *
     * */
    public static Boolean canFastAttack(boolean knightIsAwake){
        return !knightIsAwake;
    };

    /**
     *
     * Check if the group can be spied upon
     *
     * Implement the (static) AnnalynsInfiltration.canSpy() method,
     * which takes three boolean values indicating whether the knight, archer, and prisoner, respectively, are awake.
     * The method returns true if the group can be spied upon based on the state of the three characters.
     * Otherwise, it returns false:
     *
     * */
    public static Boolean canSpy(boolean knightIsAwake, boolean archerIsAwake, boolean prisonerIsAwake ){
        return knightIsAwake || archerIsAwake || prisonerIsAwake;
    }

    /**
     *
     * Check if the prisoner can be signaled
     *
     * Implement the (static) AnnalynsInfiltration.canSignalPrisoner() method, which takes two boolean values
     * indicating whether the archer and the prisoner, respectively, are awake.
     * The method returns true if the prisoner can be signaled based on the state of the two characters.
     * Otherwise, it returns false:
     *
     * */
    public static Boolean canSignalPrisoner( boolean archerIsAwake, boolean prisonerIsAwake){
        return !archerIsAwake || prisonerIsAwake;
    }

    /**
     *
     * Check if the prisoner can be freed
     *
     * Implement the (static) AnnalynsInfiltration.canFreePrisoner() method,
     * which takes four boolean values. The first three parameters indicate whether the knight,
     * archer, and prisoner, respectively, are awake. The last parameter indicates whether Annalyn's pet dog is present.
     * The method returns true if the prisoner can be freed based on the state of the three characters and
     * the presence of Annalyn's pet dog. Otherwise, it returns false:
     *
     * */
    public static Boolean canFreePrisoner(boolean knightIsAwake, boolean archerIsAwake, boolean prisonerIsAwake, boolean petDogIsPresent){
        return (!knightIsAwake && !archerIsAwake && prisonerIsAwake) || petDogIsPresent;
    }
}

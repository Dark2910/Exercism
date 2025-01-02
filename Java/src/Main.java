import Ejercicios.AnnalynsInfiltration;
import Ejercicios.Lasagna;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        boolean iniciar = true;
        Integer opcion = 0;

        while (iniciar) {

            System.out.println("Elige una opcion: " +
                    "\n 1-Lasagna" +
                    "\n 2-Annalyn's Infiltration");

            System.out.print("\nopcion: ");
            opcion = scanner.nextInt();


            switch (opcion) {
                case (1):
                    System.out.println("Lasagna");

                    Lasagna lasagna = new Lasagna();

                    int timeMissing = lasagna.remainingMinutesInOven(30);
                    System.out.println("Time: " + timeMissing);

                    int preparationTime = lasagna.preparationTimeInMinutes(2);
                    System.out.println("preparationTime: " + preparationTime);

                    int totalTime = lasagna.totalTimeInMinutes(3, 20);
                    System.out.println("total time: " + totalTime);

                    break;
                case(2):
                    System.out.println("Annalyn's Infiltration");

                    boolean knightIsAwake = true;

                    System.out.println( "canFastAttack: " + AnnalynsInfiltration.canFastAttack(knightIsAwake) );

                    knightIsAwake = false;
                    boolean archerIsAwake = true;
                    boolean prisonerIsAwake = false;

                    System.out.println( "canSpy: " + AnnalynsInfiltration.canSpy( knightIsAwake, archerIsAwake, prisonerIsAwake) );

                    archerIsAwake = false;
                    prisonerIsAwake = true;

                    System.out.println("canSignalPrisoner: " + AnnalynsInfiltration.canSignalPrisoner(archerIsAwake, prisonerIsAwake));

                    knightIsAwake = false;
                    archerIsAwake = true;
                    prisonerIsAwake = false;
                    boolean petDogIsPresent = false;

                    System.out.println("canFreePrisoner: " + AnnalynsInfiltration.canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent));

                    break;
                default:
                    iniciar = false;
            }
            System.out.println();
        }
    }
}
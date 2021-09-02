function high(x){

    arg1 = x.split(" ")
    brojac = []
    
    for(i=0; i<arg1.length; i++){
        brojac.push(0)
        for(j=0; j<arg1[i].length; j++){
            switch(arg1[i][j]){
                case 'a':
                    brojac[i] += 1;
                    break
                case 'b':
                    brojac[i] += 2;
                    break
                case 'c':
                    brojac[i] += 3;
                    break
                case 'd':
                    brojac[i] += 4;
                    break
                case 'e':
                    brojac[i] += 5;
                    break
                case 'f':
                    brojac[i] += 6;
                    break
                case 'g':
                    brojac[i] += 7;
                    break
                case 'h':
                    brojac[i] += 8;
                    break
                case 'i':
                    brojac[i] += 9;
                    break
                case 'j':
                    brojac[i] += 10;
                    break
                case 'k':
                    brojac[i] += 11;
                    break
                case 'l':
                    brojac[i] += 12;
                    break
                case 'm':
                    brojac[i] += 13;
                    break
                case 'n':
                    brojac[i] += 14;
                    break
                case 'o':
                    brojac[i] += 15;
                    break
                case 'p':
                    brojac[i] += 16;
                    break
                case 'q':
                    brojac[i] += 17;
                    break
                case 'r':
                    brojac[i] += 18;
                    break
                case 's':
                    brojac[i] += 19;
                    break
                case 't':
                    brojac[i] += 20;
                    break
                case 'u':
                    brojac[i] += 21;
                    break
                case 'v':
                    brojac[i] += 22;
                    break
                case 'w':
                    brojac[i] += 23;
                    break
                case 'x':
                    brojac[i] += 24;
                    break
                case 'y':
                    brojac[i] += 25;
                    break
                case 'z':
                    brojac[i] += 26;
                    break
            }
        }
    }
        idnx = brojac.indexOf(Math.max(...brojac))
        return arg1[indx]
    }
    console.log(high('mana i need a taxi up to ubud'))
import { Injectable } from "@angular/core";
import { Cv } from "../../models/cv.model";
import { BehaviorSubject, catchError, Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable(
    {
        
        providedIn: 'root'
    }
)
export class CvService {
    private apiUrl = "https://apilb.tridevs.net/api";
    private cvs: Cv[] = [ 
        { 
            id: 1, 
            name: 'John Doe', 
            firstname: 'John', 
            age: 30, 
            cin: '12345678', 
            motto: 'to be or not to be',
            job: 'Engineer', 
            description:'I teach web dev to students ',
            followers: 253,
            following: 114,
            projects: 35,
            jobKeywords: "HTML, CSS, NestJs, Angular",
            path: 'path/to/john.jpg' 
        }, 
        { 
            id: 2, 
            name: 'Jane Smith', 
            firstname: 'Jane', 
            age: 28, 
            cin: '87654321', 
            motto:'be the best at what i do',
            job: 'Designer',
            description:'I bring your vision to life',
            followers:3253,
            following: 200,
            projects: 20,
            jobKeywords: "Figma, AdobeXd, Sketch, Dribbble",
            path: 'path/to/jane.jpg'
        } 
    ];

    private selectedCvSubject = new BehaviorSubject<Cv | null>(null);
    selectedCv$: Observable<Cv | null> = this.selectedCvSubject.asObservable();

    constructor(private http: HttpClient) {}

    getCvs(): Observable<Cv[]>{
        return this.http.get<Cv[]>(`${this.apiUrl}/personnes`).pipe(
            catchError((error) => {
                return of(this.cvs);
            })
        );
    }

    getCvById(id: number): Observable<Cv>{
        return this.http.get<Cv>(`${this.apiUrl}/personnes/${id}`)
    }

    selectCv(cv: Cv): void {
        this.selectedCvSubject.next(cv);
    }

    getSelectedCv(): Cv | null {
        return this.selectedCvSubject.getValue();
    }

    

}
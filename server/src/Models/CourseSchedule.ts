import { Visitor } from "./Visitor";

export class SubmissionDate extends Visitor {
  constructor(
    protected id?: number,
    protected submissionDate: Date = new Date(),

  ) {
    super();
  }

  public getId(): number | undefined {
    return this.id;
  }

  public getSubmissionDate(): Date {
    return this.submissionDate;
  }

  public setId(id: number) {
    this.id = id;
  }

  public setSubmissionDate(submissionDate: Date) {
    this.submissionDate = submissionDate;
  }
}

export class CourseSchedule extends Visitor {

  constructor(
    protected id?: number,
    protected startDate: Date = new Date(),
    protected endDate: Date = new Date(),
    protected submissionDates: SubmissionDate[] = [],
  ) {
    super();
  }

  public getId(): number | undefined {
    return this.id;
  }

  public getStartDate(): Date {
    return this.startDate;
  }

  public getEndDate(): Date {
    return this.endDate;
  }

  public getSubmissionDates(): SubmissionDate[] {
    return this.submissionDates;
  }

  public setId(id: number) {
    this.id = id;
  }

  public setStartDate(startDate: Date) {
    this.startDate = startDate;
  }

  public setEndDate(endDate: Date) {
    this.endDate = endDate;
  }

  public setSubmissionDates(submissionDates: SubmissionDate[]) {
    this.submissionDates = submissionDates;
  }

}
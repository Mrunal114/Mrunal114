import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  imports:[CommonModule],
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() headers: { key: string; label: string }[] = [];
  @Input() data: any[] = [];
  @Input() itemsPerPage = 5;
  @Output() edit = new EventEmitter<any>()
  clickedRows = new Set<any>();
  currentPage = 1;
  totalPages = 1;
row: any;

  ngOnInit() {
    this.calculateTotalPages();
  }

  ngOnChanges() {
    this.calculateTotalPages();
  }

  calculateTotalPages() {
    this.totalPages = Math.ceil(this.data.length / this.itemsPerPage);
  }

  get paginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.data.slice(startIndex, startIndex + this.itemsPerPage);
  }

  toggleRow(row: any) {
    if (this.clickedRows.has(row)) {
      this.clickedRows.delete(row);
    } else {
      this.clickedRows.add(row);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  onEdit(row: any) {
    this.edit.emit(row); // Emit the row for editing
  }
}

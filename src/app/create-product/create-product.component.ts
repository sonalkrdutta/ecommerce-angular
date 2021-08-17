import { Component, OnInit,Renderer2, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup;
  error: string;
  uploadError: string;

  @ViewChild('image') private image: ElementRef;
  @Output() close = new EventEmitter();
  constructor(  private fb: FormBuilder,
    private productService: ProductService,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      productName: [''],
      price: [''],
      sku: ['']
    });
  }
  

}

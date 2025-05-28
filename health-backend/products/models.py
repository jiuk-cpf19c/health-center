from django.db import models
print("✅ models.py 로딩됨")

class Product(models.Model):
    name = models.CharField(max_length=100)  # 제품명
    description = models.TextField()  # 상세 설명
    price = models.PositiveIntegerField()  # 가격 (원)
    stock = models.PositiveIntegerField(default=0)  # 재고 수량
    image = models.ImageField(upload_to='products/', blank=True, null=True)  # 제품 이미지
    created_at = models.DateTimeField(auto_now_add=True)  # 등록일시

    def __str__(self):
        return self.name
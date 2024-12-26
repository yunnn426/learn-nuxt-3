<template>
  <q-page padding>
    <div class="row q-col-gutter-md">
      <div class="col-3">
        <q-card>
          <q-item-label header>강의 로드맵 {{ $hello('yk') }}</q-item-label>
          <q-list bordered separator>
            <q-item
              v-for="(course, index) in courses"
              :key="course.courseSlug"
              v-ripple
              clickable
              :to="course.path"
            >
              <q-item-section>
                {{ index + 1 }}. {{ course.title }}
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>
      <div class="col">
        <NuxtPage />
        <!-- 이 위치에 /course 디렉토리 내의 파일을 렌더링 -->
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
const { courses } = useCourses();
// const nuxtApp = useNuxtApp();
// const { $hello } = nuxtApp;
</script>
